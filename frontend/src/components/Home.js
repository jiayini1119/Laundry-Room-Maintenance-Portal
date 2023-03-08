import Logout from "./Logout";
import Dropdown from "./Dropdown";
import Clock from "./Clock";
import WasherTable from "./WasherTable"
import "./LoginStyle.css";
import "./HeaderFeatures.css";
import AccessReportPage from "./AccessReportPage";
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    console.log(location.state.id)
    console.log(location.state.dorm)
    // const id = localStorage.getItem('id')
    // const dorm = localStorage.getItem('dorm')

  return (
    <div className='homeheader'>
      <h1 className="hometitle">Laundry Reporter, Poor Bruin {location.state.id} <Logout /> <Dropdown /> <Clock /></h1>
      <hr></hr>
      <p>Welcome to laundry in {location.state.dorm}</p>
      <WasherTable/>
      <AccessReportPage />
      <hr></hr>
    </div>
  );
};

export default Home;