import React from 'react';
import { useLocation } from 'react-router-dom';

import Logout from "./Logout";
import Clock from "./Clock";
import WasherTableStaff from "./WasherTableStaff"
import "./LoginStyle.css";
import "./HeaderFeatures.css";
import AccessReportPage from "./AccessReportPage";

import uclaLogo from './images/UCLA_Logo.png';

const HomeStaff = () => {
  const location = useLocation();

  return (
    <div className="homeheader" style={{ display: '100%' }}>
      <h1 className="hometitle" style={{ marginTop: 0 }}>
        <br />
        Bruin Laundry <Clock />
        <br />
        <div>
          <Logout />
          <AccessReportPage/>
        </div>
      </h1>
      <hr style={{marginTop: 0}} />
      <div>
      <p className="homePageWelcome">
        Welcome to Bruin Laundry {location.state.id}!
      </p>
      <WasherTableStaff />
      <hr />
      <img src={uclaLogo} alt='UCLA Logo' style={{ position: 'absolute', right: 10, height: '50px', marginBottom: '10px', marginRight: '30px' }}/>
    </div>
  </div>)
};

export default HomeStaff;