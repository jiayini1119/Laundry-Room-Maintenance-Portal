import axios from "axios";
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Logout from "./Logout";
import Dropdown from "./Dropdown";
import Clock from "./Clock";
import EnhancedTable from "./reportPage"
import "./LoginStyle.css";
import "./HeaderFeatures.css";
import AccessReportPage from "./AccessReportPage";

const Home = () => {
  const location = useLocation();
  const id = localStorage.getItem('id')
  const dorm = localStorage.getItem('dorm')

  return (
    <div className='homeheader'>
      <h1 className="hometitle">Laundry Reporter, Poor Bruin {location.state.id} <Logout /> <Dropdown /> <Clock /></h1>
      <hr></hr>
      <EnhancedTable/>
      <p>Welcome to laundry in {location.state.dorm}</p>
      <h1 className="hometitle">Laundry Reporter, Poor Bruin {id}</h1>
      <AccessReportPage />
      <hr></hr>
      <p>Welcome to laundry in {dorm}</p>
    </div>
  );
};

export default Home;

