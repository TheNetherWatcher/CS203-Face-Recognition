# Face-Recognition Based Attendance System

## Team Details:
- Bharat Kaurav (220001017)
- Arnav Nirmal Jain (220002018)
- Aditya Yadav (220001006)
  
## Overview

This project is an attendance management system that leverages the power of InsightFace for facial recognition. The app allows users to mark attendance by capturing and analyzing facial features.

## Features

- Facial recognition for attendance tracking
- User-friendly interface
- Configurable settings for flexibility

## InsightFace

1. An open source 2D&3D face analysis model that based on deep CNNs along with metric learning losses and robust data augmentation and alignment techniques. 

2. Uses large-scale adversarial face recognition training, dropout, and principal component analysis (PCA) based noise injection.

3. It uses both softmax loss for classification and triplet loss for metric learning. The combination allows it to learn highly discriminative facial features.

4. For alignment, it uses a coarse-to-fine strategy. An MTCNN face detector gives coarse alignment, then a affine transformation provides finer alignment. This makes it robust to pose variation.

5. Data augmentation techniques like horizontal flipping, image distortion, and lighting noise injection further improve its ability to handle real-world variations.


## Prerequisites

Before you start, ensure you have the following installed:

- Python 3.x
- InsightFace library
- node.js
- React
- Microsoft C++ Build Tools

## Installation and Setup


1. Clone the repository:

   ```bash
   git clone https://github.com/TheNetherWatcher/CS203-Face-Recognition.git

2. Install Dependencies

   ```bash
   # server dependencies
   cd server
   pip install -r requirements.txt

   # client dependencies
   cd ../client
   npm install

3. Run the application

   ```bash
   # server
   cd ../server
   uvicorn main:app --reload

   # client
   cd ../client
   npm start

## Description
1. This project takes a image of a group of people as input.
2. Does facial detection using insightface.
3. Uses insightface for face recognition.
4. Gives .csv and json file as output containing whether an individual is present or absent in that particular photo.

## Future Improvements

* Database Connection (preferably MongoDB)
* Execution time of the model

## Acknowledgements
* InsightFace developers and contributors.
* FastAPI, ReactJS, and TailwindCSS communities for their valuable tools and frameworks.
