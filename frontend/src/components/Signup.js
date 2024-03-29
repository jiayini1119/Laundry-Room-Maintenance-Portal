import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import "./LoginStyle.css"
import { ChatState } from "../Context/ChatProvider";


const cheerio = require('cheerio');

/*reference: Techy Web Dev. "Login and Signup tutorial in React JS with node ,express and mongoDB in 2023 | MERN stack tutorial". Youtube. Feb 12, 2023. https://www.youtube.com/watch?v=S9eCBX-Re8A*/

const Signup = () => {
  
  const history=useNavigate();
  
  const [email, setEmail]=useState();
  const [password, setPassword]=useState();
  const [username, setUsername]=useState();
  const [dorm, setDorm]=useState();
  const { selectedChat, setSelectedChat, chats, setChats } = ChatState();

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
    else if (dorm !== "Hedrick" && dorm !== "Sunset" && dorm !== "Rieber" && dorm !== "Deneve" && dorm !== "Saxon") {
      alert ("Please enter dorm from the following: Hedrick/Sunset/Rieber/Deneve/Saxon")
    }

    else {
      try {
        await axios.post("http://localhost:4000/api/user/", {email, password, 'name': username, dorm})
        .then(res=>{
          setSelectedChat(undefined)
          setChats(undefined)
          localStorage.clear()
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('id', res.data.name);
          localStorage.setItem('email', res.data.email);
          localStorage.setItem('dorm', res.data.dorm)
          localStorage.setItem('fullID', res.data._id);
 //       history("/home", {state:{id:username, token: res.data.token}})
          history("/home", {state:{id: res.data.name, token: res.data.token, dorm: res.data.dorm}})
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
    <div className='SignupPage'>
      <form className='authForm' method='post'>
      <h1 className='authHead'>Signup</h1>
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
          <input type="dorm" onChange={(e)=>setDorm(e.target.value)} placeholder='Hedrick/Sunset/Rieber/Deneve/Saxon' id="dorm" name="dorm"/>
        </div>
      <button className='authSubmit' onClick={handleSubmit}> Submit </button>
      <br/>
      <p className='remind' style={{marginRight: 0, transform: "translate(-7%, 0)"}}>Already signed up?</p>
      <Link to='/' className='authLink' style={{padding: 0, transform: "translate(-3%, 0)"}}>Login Page</Link>
      </form>
    </div>
  )
}

export default Signup;
