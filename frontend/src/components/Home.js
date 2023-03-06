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

const Home = () => {
  const location = useLocation();
  const id = localStorage.getItem('id')
  const dorm = localStorage.getItem('dorm')

  return (
    <div className='homeheader'>
      <h1 className="hometitle">Laundry Reporter, Poor Bruin {location.state.id} <Logout /> <Dropdown /> </h1>
      <hr />
      <Typography fontSize={24} color="textPrimary" fontFamily="Roboto" style={{ display: "inline-block" }}>
      Welcome to laundry in {location.state.dorm}. Right now the time is: <Clock />
    </Typography>
    <WasherTable/>
      <AccessReportPage />
      <hr />
      
    </div>
  );
};

export default Home;

