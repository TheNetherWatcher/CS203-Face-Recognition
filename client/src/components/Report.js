import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const map = {
  220001001: "AADISH JAIN",
  220001002: "ABHINAV GANGIL",
  220001003: "ADITI ASHISH WEKHANDE",
  220001004: "ADITYA KSHITIZ",
  220001005: "ADITYA SACHIN MASTUD",
  220001006: "ADITYA YADAV",
  220001007: "AMAN PRATAP SINGH",
  220001008: "AMIT TIWARI",
  220001009: "ANIRUDH GAUTAM",
  220001010: "ANNAMSHETTI SUMANTH",
  220001011: "ARAVAPALLI PAVAN KUMAR",
  220001012: "ATHARVA ANIL SANGAWAR",
  220001013: "ATHARVA NANOTI",
  220001014: "AVIRAL SHARMA",
  220001015: "AYITHA TRIBUVAN",
  220001016: "BALABHADRA RITHVIK",
  220001017: "BHARAT KAURAV",
  220001018: "BHAVANAM SAI PAVAN KUMAR REDDY",
  220001019: "BHUKYA HAVISH",
  220001020: "CHANDEKAR RIDDHI UMESH",
  220001021: "CHERUPALLY VINAY",
  220001022: "CHIRANJIVI KESHAV",
  220001023: "DARBHA KALYANA SRIRAM",
  220001024: "DARSHIL PATEL",
  220001025: "DEBASISH PADHY",
  220001026: "DEEPAK YADAV",
  220001027: "DEVANSHI CHHATBAR",
  220001028: "EDULA BHOOMIKA",
  220001029: "GARIMA UPADHYAY",
  220001030: "GODUGU HEMANTH CHANDRA",
  220001031: "GUNTUKU RISHWANTH SAI",
  220001032: "HITESH MAURYA",
  220001033: "JAY SOLANKI",
  220001034: "JONNALAGADDA SAI PRANAY DEEP",
  220001035: "KALWAGHE PRANAV SANTOSH",
  220001036: "KAMBAM SAI RUCHITHA",
  220001037: "KANAK NAGAR",
  220001038: "KAPUGANTY VENKATA SATYA TEJA",
  220001039: "KARAN JALINDAR JADHAV",
  220001040: "KODUDULA NIKETH REDDY",
  220001041: "KONETI TEJASWINI",
  220001042: "LALI",
  220001043: "MADAN P",
  220001044: "MALLAVARAPU SAI VARSHITH",
  220001045: "MISHA JAIN",
  220001046: "MUDE ANKITHA",
  220001047: "MUDE HEMA DEEPIKA",
  220001048: "MUSKAN",
  220001049: "NAREN KUMAR SAI KAJA",
  220001050: "NEERUPAM",
  220001051: "NIKITA SANJAY TAYADE",
  220001052: "P C UMA MAHESH",
  220001053: "PANCHANGAM AKHILESH",
  220001054: "PANTHAM RAJA KRISHNA",
  220001055: "PAPPALA TEJASWINI",
  220001056: "PARAM BANSAL",
  220001057: "PARTH SHARADRAO DESHMUKH",
  220001058: "PRADEEP KUMAR REBBAVARAPU",
  220001059: "PRANJAY CHOUHAN",
  220001060: "PRATHAM GUPTA",
  220001061: "PRINCE KUMAR GUPTA",
  220001062: "PRIYANSH VERMA",
  220001063: "RISHI BHARAT JUNGHARE",
  220001064: "S RUTHVIK",
  220001065: "SAI SANJANA REDDY ALGUBELLY",
  220001066: "SAKET MESHRAM",
  220001067: "SAKET PRASHANT THAMKE",
  220001068: "SAMYAK DHYANI",
  220001069: "SANJEET KUMAR",
  220001070: "SARTHAK BRAR",
  220001071: "SATYA NARAYAN",
  220001072: "SHAH HARSH DHAVAL",
  220001073: "SHAIK SUHANA",
  220001074: "SHAURYA KSHITIJ KHETARPAL",
  220001075: "SHIVRAJ RATHORE",
  220001076: "SIDDHESH NITIN WAJE",
  220001077: "VASHISTHA NARAYAN CHATURVEDI",
  220001078: "VEDANT DINKAR",
  220001079: "VIJIT BALSORI",
  220001080: "VINEET VERMA",
  220001081: "VOTTE SRIYANS REDDY",
  220001082: "YANNAM YESWANTH REDDY",
  220002018: "ARNAV JAIN",
  220002029: "BGV SHIVA",
  220002063: "PRASAD AKANKSHA",
  220002081: "VEDANT UPADHYAY",
};

export default function Report() {
  const [listOfLectures, setListOfLectures] = useState([]);
  const [response, setResponse] = useState({});
  let history = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/info").then((response) => {
      console.log(response);
      setListOfLectures(response.data["data"]);
    });
  }, []);

  let n = listOfLectures.length;

  useEffect(() => {
    fetch(`http://localhost:8000/report`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(JSON.stringify(response));
        setResponse(response);
      });
  }, []);

  const data = Object.entries(response).map(([key, value]) => ({
    id: key,
    value: value,
  }));

  return (
    <div>
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              ID
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Name
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Attendance
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {data.map((item, index) => {
            return (<tr className="hover:bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">{item.id}</th>
            <td className="px-6 py-4">{map[item.id]}</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <span className="mr-2">{(item.value * 100) / n}%</span>
                <div className="relative w-full">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                    <div
                      style={{ width: `${(item.value * 100) / n}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>)     
          })}
        </tbody>
      </table>
    </div>
  );
}
