import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Report from "./components/Report"
import EditProfilePage from "./components/EditProfilePage"
import HomeStaff from "./components/HomeStaff"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {useState} from 'react';
import './App.css';

function App(){
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element = {<Login/>} />
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/home/report" element = {<Report/>}/>
          <Route path = "/edit_profile" element = {<EditProfilePage/>}/>
          <Route path = "/home_staff" element = {<HomeStaff/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;