
import React, { useState } from 'react';
import { Typography } from '@mui/material';

import Logout from "./Logout";
import Dropdown from "./Dropdown";
import Clock from "./Clock";
import WasherTable from "./WasherTable"
import "./LoginStyle.css";
import "./HeaderFeatures.css";
import AccessReportPage from "./AccessReportPage";
import EditProfile from "./EditProfileButton";

import uclaLogo from './images/UCLA_Logo.png';

const Home = () => {
  const [bgColor, setBgColor] = useState("#fff");
  const dorm = localStorage.getItem("dorm")
  const id = localStorage.getItem("id")

  return (
    <div className="homeheader">
      <h1 className="hometitle">
      Laundry Reporter <Clock /><Dropdown setBgColor={setBgColor} />
      <AccessReportPage/>
        <div>
          <EditProfile />
          <Logout />
        </div>
      </h1>
      <hr />
      <div style={{ backgroundColor: bgColor }}>
      <p className = "homePageWelcome" >
        Welcome to laundry in {dorm}, poor Bruin {id}
      </p>
      <WasherTable />
      <hr />
      <img src={uclaLogo} alt='UCLA Logo' style={{ position: 'absolute', right: 10, height: '50px', marginBottom: '10px', marginRight: '30px' }}/>
    </div>
  </div>)
};


export default Home;