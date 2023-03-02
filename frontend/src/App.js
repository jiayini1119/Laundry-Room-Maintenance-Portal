import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Report from "./components/Report"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {useState} from 'react';

function App(){
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element = {<Login/>} />
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/home/report" element = {<Report/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;