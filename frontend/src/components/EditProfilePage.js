import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import "./LoginStyle.css";

const cheerio = require('cheerio');

const EditProfilePage = () => {
    const history = useNavigate();
    const name = localStorage.getItem("id");
    const [dorm, setDorm] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("old details: ", localStorage.getItem("dorm"));
        console.log("new details: ", dorm);

        try {
            await axios.post("http://localhost:4000/api/user/edit/", { name, dorm })
                .then(res => {
                    localStorage.setItem('dorm', res.data.dorm)
                    history("/home", { state: { id: res.data.name, token: res.data.token }})
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
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='EditProfilePage'>
            <form className='authForm' method='post'>
                <h1 className='authHead'>Edit Profile</h1>
                <div>
                    <input list="dorms" type="dorm" onChange={(e) => setDorm(e.target.value)} placeholder="select your dorm" id="dorm" name="dorm" />
                    <datalist id="dorms">
                        <option value="Hedrick" />
                        <option value="Sunset" />
                        <option value="Rieber" />
                        <option value="Deneve" />
                        <option value="Saxon" />
                    </datalist>
                </div>
                <button className='authSubmit' onClick={handleSubmit}> Submit </button>
                <br />
                <Link to='/home' className='authLink'>Back to Home Page</Link>
            </form>
        </div>
    )
}

export default EditProfilePage;