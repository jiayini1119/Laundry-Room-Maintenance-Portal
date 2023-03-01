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

  async function handleSubmit(e) {
    e.preventDefault();

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
        await axios.post("http://localhost:4000/api/user/login", {username, email, password})
        .then(res=>{
          if (res.data.email==="admin@admin.com") {
            history("/adminhome", {state:{id: res.data.name, dorm: res.data.dorm}})}
          else {
            history("/home", {state:{id: res.data.name, dorm: res.data.dorm}})}
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
      <form className='authForm' method='post'>
        <h1 className='authHead'>Login</h1>
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