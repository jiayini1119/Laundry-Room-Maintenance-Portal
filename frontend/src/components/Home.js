
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
      <h1 className="hometitle">
      Laundry Reporter <Clock /><Dropdown setBgColor={setBgColor} />
      <AccessReportPage style={{ marginTop: 50 }} />
        <div className="navButtonContainer">
          <EditProfile />
          <Logout />
        </div>
      </h1>
      <hr />
      <Typography fontSize={24} color={bgColor} fontFamily='Roboto' style={{ display: 'inline-block', marginLeft: '28%' }}>
        Welcome to laundry in {location.state.dorm}, poor Bruin {location.state.id} :p
      </Typography>
      <WasherTable />
      <hr />
      <img src={uclaLogo} alt='UCLA Logo' style={{ position: 'absolute', right: 10, height: '50px', marginBottom: '10px', marginRight: '30px' }}/>
  </div>)
};


export default Home;