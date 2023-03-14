import React, {useState} from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import "./LoginStyle.css";

const cheerio = require('cheerio');

const Login = () => {

  const history=useNavigate();

  const [username, setUsername]=useState();
  const [email, setEmail]=useState();
  const [password, setPassword]=useState();
  const [userType, setUserType] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!userType) {
      alert("Please enter your user type");
      return;
    }

    if (!email) {
      alert("Please enter your email");
      return;
    }

    else if (!password) {
      alert("Please enter your password");
      return;
    }

    else {
      try {
        await axios.post("http://localhost:4000/api/user/login", {username, email, password, userType})
        .then(res=>{
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('id', res.data.name);
          localStorage.setItem('email', res.data.email);
          localStorage.setItem('fullID', res.data._id);
          localStorage.setItem('dorm', res.data.dorm);
          userType === "student" ? history("/home", {state:{id: res.data.name, dorm: res.data.dorm}})
          : history("/home_staff", {state:{id: res.data.name, dorm: res.data.dorm}})
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data);
            const $ = cheerio.load(error.response.data.toString());
            const errorMessage = $('pre').text();
            const messageWithoutStack = errorMessage.split('at')[0];
            alert(messageWithoutStack);
          }
        })
      }
      catch(err){
        console.log(err);
      }
    }
  }

  return (
    <div className='LoginPage'>
      <div className='backGround'></div>
      <form className='authForm' method='post'>
        <h1 className='authHead'>Login</h1>
        {/* referenced from Metty on https://codepen.io/Metty/pen/MWjOavR */}
        <div className="buttonWrapper">
          <input type="radio" id="student" name="userType" value="student" onChange={(e)=>setUserType(e.target.value)} />
          <label htmlFor="student" className="option student">
            <div className="dot"></div>
            <span>student</span>
          </label>
          <br />
          <input type="radio" id="staff" name="userType" value="staff" onChange={(e)=>setUserType(e.target.value)} />
          <label htmlFor="staff" className="option staff">
            <div className="dot"></div>
            <span>staff</span>
            </label>
          <br />
        </div>
        <div>
          <input type="username" onChange={(e)=>setUsername(e.target.value)} placeholder='username' id="username" name="username"/>
        </div>
        <div>
          <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='email' id="email" name="email"/>
        </div>
        <div>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='password' id="password" name="password"/>
        </div>

      <button className='authSubmit' onClick={handleSubmit}> Submit </button>
      <br/>
      <p className='remind'>Not signed up?</p>
      <Link to='/signup' className='authLink'>Signup Page</Link>
      </form>
    </div>
  )
}
export default Login;