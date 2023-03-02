import Logout from "./Logout";
import GoBack from "./GoBack";

const Report = () => {
//   const location = useLocation();
  const id = localStorage.getItem('id')
  const email = localStorage.getItem('email')

  return (
    <div className='reportheader'>
      <h1 className="reporttitle">
        {email === "admin@admin.com" ? "Students' Report Messages" : "Report the Problem Here"}, {id}
      </h1>
      <Logout />
      <GoBack />
    </div>
  );
};

export default Report;

