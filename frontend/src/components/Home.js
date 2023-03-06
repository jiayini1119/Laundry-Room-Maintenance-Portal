import axios from "axios";
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Logout from "./Logout";
import Dropdown from "./Dropdown";
import Clock from "./Clock";
import WasherTable from "./WasherTable"
import "./LoginStyle.css";
import "./HeaderFeatures.css";
import AccessReportPage from "./AccessReportPage";
import uclaLogo from './images/UCLA_Logo.png';

const Home = () => {
  const location = useLocation();
  const id = localStorage.getItem('id')
  const dorm = localStorage.getItem('dorm')

  return (
    <div className='homeheader'>   
      <h1 className="hometitle">
      Laundry Reporter <Clock /><Dropdown /><Logout /> </h1>
      <hr />
      <Typography fontSize={24} color="textPrimary" fontFamily="Roboto" style={{ display: "inline-block" }}>
      Welcome to laundry in {location.state.dorm}, poor Bruin {location.state.id} :p 
    </Typography>
    <WasherTable/>
      <AccessReportPage />
      <hr />
      <img src={uclaLogo} alt='UCLA Logo' style={{ position: 'absolute',right:10, height: '50px', marginBottom: '10px',marginRight: '30px' }} />     
    </div>
  );
};

export default Home;

