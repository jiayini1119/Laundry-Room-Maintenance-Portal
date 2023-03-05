import Logout from "./Logout";
import Dropdown from "./Dropdown";
import Clock from "./Clock";
import WasherTable from "./WasherTable"
import "./LoginStyle.css";
import "./HeaderFeatures.css";
import AccessReportPage from "./AccessReportPage";

const Home = () => {
  const id = localStorage.getItem('id')
  const dorm = localStorage.getItem('dorm')

  return (
    <div className='homeheader'>
      <h1 className="hometitle">Laundry Reporter, Poor Bruin {id} <Logout /> <Dropdown /> <Clock /></h1>
      <hr></hr>
      <p>Welcome to laundry in {dorm}</p>
      <WasherTable/>
      <AccessReportPage />
      <hr></hr>
    </div>
  );
};

export default Home;

