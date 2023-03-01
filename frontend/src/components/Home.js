import React from "react";
import axios from "axios";
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Logout from "./Logout"

const Home = () => {
  const location = useLocation();
  async function getUserAddress() {
    try {
      const address = await axios.post("/home", location.state.id);
      console.log(address);
    } catch (err) {
      console.log(err);
    }
  }
  

  return (
    <>
      <Navbar title="Home" />
      <Typography variant="h3">Welcome to Laundry Reporter, Poor Bruin {location.state.id}!</Typography>
      <Logout/>
    </>
  )
}

export default Home;
