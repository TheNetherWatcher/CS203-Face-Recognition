import './App.css';
import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import Navbar from './components/Navbar';
import Upload from './components/Upload';
import Courses from './components/Courses';
import DSA from './components/DSA';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Report from './components/Report';
import Cards from './components/Cards';

function App() {
  return (
    <Router>  
        <div className="App">  
          <Navbar/>
          <Routes>  
            <Route exact path='/' element={< Courses />}></Route>  
            <Route exact path='/report' element={< Report />}></Route>  
            <Route exact path='/DSA/' element={< Cards />}></Route>  
            <Route exact path='/DSA/:idx' element={< DSA />}></Route>  
            <Route exact path='/about'></Route>  
            <Route exact path='/contact'></Route>  
          </Routes>  
        </div>  
    </Router>  
  );
}

export default App;
