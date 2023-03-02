import axios from "axios";
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Logout from "./Logout";
import Dropdown from "./Dropdown";
import "./LoginStyle.css";

const Home = () => {
  const location = useLocation();
  return(
    <div>Home Page
        <h1>Welcome to Laundry Reporter, Poor Bruin {location.state.id}</h1>
        <Logout/>
    </div>
  )
}

export default Home;

