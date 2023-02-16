import React from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import Logout from "./Logout"

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
