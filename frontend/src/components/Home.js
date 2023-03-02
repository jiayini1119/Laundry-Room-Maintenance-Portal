import axios from "axios";
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Logout from "./Logout";
import Dropdown from "./Dropdown";
import Clock from "./Clock";
import "./LoginStyle.css";
import "./HeaderFeatures.css";

const Home = () => {
  const location = useLocation();

  return (
    <div className='homeheader'>
      <h1 className="hometitle">Laundry Reporter, Poor Bruin {location.state.id}</h1>
      <Logout /> <Dropdown />
      <hr></hr>
      <Clock />
      <p>Welcome to laundry in {location.state.dorm}</p>
    </div>
  );
};

export default Home;

