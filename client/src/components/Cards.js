import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';


export default function Cards() {

    const [listOfLectures, setListOfLectures] = useState([]);
    let history = useNavigate();
    
    useEffect(() => {
        axios.get("http://localhost:8000/info").then((response) => {
          console.log(response)
          setListOfLectures(response.data["data"]);
        });
      }, []);

    
    return (
        
        <div style={{"display": "flex", "margin": 30}}>
            <div
                className="card"
                onClick={() => {
                history(`/report`);
            }}>
                <Card className="max-w-sm" style={{"margin": 30}}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Full report
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Attendance records for students
                    </p>
                    <Button>
                        Read more
                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </Button>
                </Card>   
            </div>
         
            {listOfLectures.map((value, key) => {
                return (
                    <div
                        className="card"
                        onClick={() => {
                        history(`/DSA/${value["lecture"]}`);
                        }}
                    >
                        <Card className="max-w-sm" style={{"margin": 30}}>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {value["date"]}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Attendance for lecture {value["lecture"]}
                            </p>
                            <Button>
                                Read more
                                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            </Button>
                        </Card>
                    </div>
                ); 
            })}
        </div>
    )
}
