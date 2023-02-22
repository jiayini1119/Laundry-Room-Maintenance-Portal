import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';


const Signup = () => {
  
  const history=useNavigate();
  
  const [email, setEmail]=useState();
  const [password, setPassword]=useState();
  const [username, setUsername]=useState();
  const [dorm, setDorm]=useState();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username) {
      alert("Please enter a username");
      return;
    }
    else if (!email) {
      alert("Please enter an email");
      return;
    }
    else if (!password) {
      alert("Please enter a password");
      return;
    }
    else if (!dorm) {
      alert("Please enter a dorm");
      return;
    }

    else {
      try {
        await axios.post("http://localhost:5000/api/user/", {email, password, 'name': username, dorm})
        .then(res=>{
          // if(res.data=="exist"){
          //   alert("User already exist")
          // }
          // else if (res.data=="nonexist"){

          localStorage.setItem('token', res.data.token);
          history("/home", {state:{id:username, token: res.data.token}})
        //   }
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
    <div className='SignupPage'>
      <h1>Signup</h1>
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
        <div>
          <input type="dorm" onChange={(e)=>setDorm(e.target.value)} placeholder='dorm' id="dorm" name="dorm"/>
        </div>
      <input type='submit' onClick={handleSubmit}/>
      <br/>
      <p>If you are have already signed up, click Login Page</p>
      <br/>
      <Link to='/'>Login Page</Link>
      </form>
    </div>
  )
}

export default Signup;
