
import axios from "axios";
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const location = useLocation();
  const [bgColor, setBgColor] = useState("#fff");

  return (
    <div style={{ display: '100%' }}>
      <br />
      <h1 className="hometitle">
      Laundry Reporter <Clock /><Dropdown setBgColor={setBgColor} />
      <br />
      <AccessReportPage/>
        <div className="navButtonContainer">
          <EditProfile />
          <Logout />
        </div>
      </h1>
      <hr />
      <p className="homePageWelcome" style={{ color: bgColor }}>
        Welcome to laundry in {location.state.dorm}, poor Bruin {location.state.id} :p
      </p>
      <WasherTable />
      <hr />
      <img src={uclaLogo} alt='UCLA Logo' style={{ position: 'absolute', right: 10, height: '50px', marginBottom: '10px', marginRight: '30px' }}/>
  </div>)
};


export default Home;