"use client";
import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";
import {
  Button,
  Label,
  Modal,
  FileInput,
  Select,
  Datepicker
} from "flowbite-react";

export default function Upload() {
  const [openModal, setOpenModal] = useState("");
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };

  const [image, setImage] = useState(null);
  const [course, setCourse] = useState("");
  const [date, setDate] = useState(null);

  useEffect(() => {
    setCourse('CS203 - DSA');
    setDate('2023-09-11'); // default selected value
  }, []);



  const handleSubmit = async () => {
    const formData = new FormData();
    const details = new FormData();
    formData.append("image", image, 'group.jpg');
    details.append("course", course);
    details.append("date", date);
    
    axios
    .post('http://localhost:8000/api/submit', details, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
    
    const response = await fetch('http://localhost:8000/api/image',{
      method: "POST",
      body: formData,
    }).then(response => console.log("Image uploaded"))
    .catch(console.log("Upload failed."))



  };

  return (
    <>
      <Button onClick={() => props.setOpenModal("form-elements")}>
        Upload
      </Button>
      <Modal
        show={props.openModal === "form-elements"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit} className="px-2">
            <div className="max-w-md my-2" id="fileUpload">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Upload file" />
              </div>
              <FileInput
                // helperText="A group photo of all the students taken during lecture."
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <div className="my-2" id="select">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Select course" />
              </div>
              <Select id="course" 
                onChange={(e) => setCourse(e.target.value)}
                required
              >
                <option>CS203 - DSA</option>
                <option>CS207 - DBMS</option>
                <option>CS201 - DM</option>
              </Select>
            </div>
            
            <div className="my-2">
              <div className="mb-2 block my-2">
                <Label htmlFor="countries" value="Select date" />
              </div>
              <input type="date" name="date" onChange={(e) => setDate(e.target.value)} style={{borderRadius:5}}/>
              {/* <Datepicker 
                onChange={(date) => setDate(date)}
              /> */}
            </div>

            <div>
              <button type="submit" className="relative border-2 border-black   py-3 my-7 bg-white mr-2 overflow-hidden text-sm font-medium text-black-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-black dark:bg-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span className="relative px-5 py-3 transition-all ease-in duration-75 bg-white dark:bg-white-900 rounded-md group-hover:bg-opacity-0">
                      Upload Attendance
                  </span>
              </button>
            </div>

          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
