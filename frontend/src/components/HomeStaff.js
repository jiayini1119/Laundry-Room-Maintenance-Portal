
import axios from "axios";
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import Logout from "./Logout";
import Dropdown from "./Dropdown";
import Clock from "./Clock";
import WasherTableStaff from "./WasherTableStaff"
import "./LoginStyle.css";
import "./HeaderFeatures.css";
import AccessReportPage from "./AccessReportPage";
import EditProfile from "./EditProfileButton";

import uclaLogo from './images/UCLA_Logo.png';

const HomeStaff = () => {
  const location = useLocation();
  const [bgColor, setBgColor] = useState("#fff");

  return (
    <div className="homeheader">
      <h1 className="hometitle">
        Laundry Reporter <Clock />
        {/* <Dropdown setBgColor={setBgColor} /> */}
        <Logout /><EditProfile />
      </h1>
      <hr />
      <div style={{ backgroundColor: bgColor }}>
      <Typography fontSize={24} color='textPrimary' fontFamily='Roboto' style={{ display: 'inline-block' }}>
        Welcome to laundry in {location.state.dorm}, poor Bruin {location.state.id} :p
      </Typography>
      <WasherTableStaff />
      <AccessReportPage />
      <hr />
      <img src={uclaLogo} alt='UCLA Logo' style={{ position: 'absolute', right: 10, height: '50px', marginBottom: '10px', marginRight: '30px' }}/>
    </div>
  </div>)
};


export default HomeStaff;