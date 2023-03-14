
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

import uclaLogo from './images/UCLA_Logo.png';

const HomeStaff = () => {
  const location = useLocation();
  const [bgColor, setBgColor] = useState("#fff");

  return (
    <div className="homeheader" style={{ display: '100%' }}>
      <h1 className="hometitle">
        Laundry Reporter <Clock />
        {/* <Dropdown setBgColor={setBgColor} /> */}
        <div>
          <Logout />
          <AccessReportPage/>
        </div>
      </h1>
      <hr />
      <div style={{ backgroundColor: bgColor }}>
      <p className="homePageWelcome">
        Welcome to Laundry Reporter, poor Staff {location.state.id} :p
      </p>
      <WasherTableStaff />
      <hr />
      <img src={uclaLogo} alt='UCLA Logo' style={{ position: 'absolute', right: 10, height: '50px', marginBottom: '10px', marginRight: '30px' }}/>
    </div>
  </div>)
};

export default HomeStaff;