import os
import cv2
import json
import uvicorn
import insightface
import pandas as pd
import numpy as np
from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import shutil
from pathlib import Path
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

app = FastAPI()

idx = 1
course = None
date = None
details = {}
status = {}
for i in range(1, 9):
    status["22000100" + str(i)] = 0
for i in range(10, 83):
    status["2200010" + str(i)] = 0
status["220002018"] = 0
status["220002029"] = 0
status["220002063"] = 0
status["220002081"] = 0

origins = [
    "http://localhost", 
    "http://localhost:3000", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class File(BaseModel):
    course: str
    date: str

def find_next_file_count(dir):
    files = [f for f in os.listdir(dir)]
    return len(files) + 1

@app.post('/api/submit', tags=["form"])
async def get_formData(file: File):
    global course, date
    info = {};
    file_counter = find_next_file_count("info")
    print(file_counter)
    info["lecture"] = file_counter
    info["date"] = file.date
    file_name = f"info/info_{file_counter}.json"
    if not os.path.exists("info"):
        os.makedirs("info")
    with open(file_name, "w") as file:
        json.dump(info, file)
    with open('info.json', 'r') as file:
        data = json.load(file)
    data["data"].append(info)
    with open('info.json', 'w') as file:
        json.dump(data, file, indent=2)

@app.post('/api/image')
async def get_image(image: UploadFile):
    upload_dir = Path("uploads")
    upload_dir.mkdir(parents=True, exist_ok=True)

    # Create a unique filename for the uploaded image
    image_path = upload_dir / image.filename

    with image_path.open("wb") as image_file:
        shutil.copyfileobj(image.file, image_file)

    # Load the InsightFace model for face recognition
    model = insightface.app.FaceAnalysis()
    model.prepare(ctx_id=0, det_size=(640, 640))

    # Load the group photo
    group_image_path = f'./uploads/group.jpg'
    group_img = cv2.imread(group_image_path)

    # Load and process student images
    student_folder = 'images'
    student_images = os.listdir(student_folder)

    # Get images of indvidual students
    faces_count = 0
    student_data = []
    for student_image in student_images:
        student_id = os.path.splitext(student_image)[0]
        student_image_path = os.path.join(student_folder, student_image)
        img = cv2.imread(student_image_path)

        if img is not None:
            faces = model.get(img)
        if faces:
            faces_count += 1
            student_data.append({'student_id': student_id, 'face_features': faces[0].embedding})


    print("Number of students: ", faces_count)

    # Load the group photo again
    group_img = cv2.imread(group_image_path)

    recognized_faces = 0
    results = []
    with open('report.json', "r") as file:
        data = json.load(file)
        
    # Perfrom face recognition by comparing similarity values
    for student in student_data:
        for face in model.get(group_img):
            similarity = np.dot(face.embedding, student['face_features']) / (np.linalg.norm(face.embedding) * np.linalg.norm(student['face_features']))
            if similarity > 0.31:  # Adjust the threshold as needed
                recognized_faces += 1
                status[str(student['student_id'])] = 1
                data[str(student['student_id'])]  += 1
                results.append({'student_id': student['student_id'], 'attendance': 'Present'})
                break
        else:
            results.append({'student_id': student['student_id'], 'attendance': 'Absent'})

    # Update the total attedance of individual students
    with open('report.json', 'w') as file:
        json.dump(data, file, indent=2)
    print("Number of recognized faces: ", recognized_faces)
    
    file_counter = find_next_file_count("records")

    # Save the results to a CSV file
    results_df = pd.DataFrame(results)
    csv_path = f"./records_csv/attendance_{file_counter}.csv"
    results_df.to_csv(csv_path, index=False)
    print("Attendance data saved to attendance.csv")

    # Save the results to a JSON file
    file_name = f"records/status_{file_counter}.json"
    if not os.path.exists("records"):
        os.makedirs("records")
    with open(file_name, "w") as file:
        json.dump(status, file)

    for key in status:
        status[key] = 0
    return {"message": "Image uploaded successfully"}
    
@app.get("/status/{idx}")
async def update_attendance(idx: int) -> dict:
    file_name = f"records/status_{idx}.json"
    if os.path.exists(file_name):
        with open(file_name, "r") as file:
            status_data = json.load(file)
        print("got from folder")
        return JSONResponse(content=status_data)
    else:
        print("got from variable")
        json_compatible_item_data = jsonable_encoder(status)
        return JSONResponse(content=json_compatible_item_data)
    
@app.get("/info/")
async def get_info() -> dict:
    file_name = f"info.json"
    if os.path.exists(file_name):
        with open(file_name, "r") as file:
            status_data = json.load(file)
        return JSONResponse(content=status_data)
    else:
        json_compatible_item_data = jsonable_encoder({"lecture": 1, "date": "2023-09-11"})
        return JSONResponse(content=json_compatible_item_data)

@app.get("/report/")
async def get_info() -> dict:
    file_name = f"report.json"
    if os.path.exists(file_name):
        with open(file_name, "r") as file:
            status_data = json.load(file)
        return JSONResponse(content=status_data)
    else:
        json_compatible_item_data = jsonable_encoder(status_data)
        return JSONResponse(content=json_compatible_item_data)