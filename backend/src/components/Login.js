import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  
  const history=useNavigate();

  const [email, setEmail]=useState();
  const [password, setPassword]=useState();
  const [username, setUsername]=useState();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username) {
      alert("Please enter your username");
      return;
    }
    else if (!email) {
      alert("Please enter your email");
      return;
    }

    else if (!password) {
      alert("Please enter your password");
      return;
    }

    else {
      try {
        await axios.post("http://localhost:3000/", {username, email, password})
        .then(res=>{
          // if(res.data=="exist"){
           history("/home", {state:{id:username}})
          // }
          // else if (res.data=="notexist"){
          //   alert("User has not signed up")
          // }
        })
        .catch(e=>{
          alert("Wrong details")
          console.log(e);
        })
      }
      catch(err){
        console.log(err);
      }
    }
  }

  return (
    <div className='LoginPage'>
      <h1>Login</h1>
      <form method='post'>
        <div>
          <input type="username" onChange={(e)=>setUsername(e.target.value)} placeholder='username' id="username" name="username"/>
        </div>
        <div>
          <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='email' id="email" name="email"/>
        </div>
        <div>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='password' id="password" name="password"/>
        </div>

      <input type='submit' onClick={handleSubmit}/>
      <br/>
      <p>If you are not signed up, click SignUp Page</p>
      <br/>
      <Link to='/signup'>Signup Page</Link>
      </form>
    </div>
  )
}
export default Login;