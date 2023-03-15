import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Box, FormControl, FormHelperText, MenuItem, Modal, Select, Typography } from '@mui/material';
import GoBack from "./GoBack";
import "./LoginStyle.css";

const cheerio = require('cheerio');

const EditProfilePage = () => {
    const history = useNavigate();
    const email = localStorage.getItem("email");
    const [dorm, setDorm] = useState("");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (data) => {
        setOpen(false);
        localStorage.setItem('dorm', dorm);
        history("/home", { state: { id: localStorage.getItem('id'), token: data.token, dorm } })
    }
    const handleDropdownChange = (e) => {
        setDorm(e.target.value);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    async function handleSubmit(e) {
        e.preventDefault();

        if (!dorm) {
            alert("Please enter your dorm.");
            return;
        }

        if (dorm != "Hedrick" && dorm != "Sunset" && dorm != "Rieber" && dorm != "Deneve" && dorm != "Saxon") {
            alert("Invalid dorm input.");
            return;
        }

        try {
            await axios.post("http://localhost:4000/api/user/edit/", { email, dorm })
                .then(res => {
                    localStorage.setItem('dorm', res.data.dorm);
                    handleOpen(res.data);
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
        <div>
            <form className='authForm' method='post'>
                <h1 className='authHead'>Edit Profile</h1>
                <div>
                    <FormControl sx={{ m: 1, width: 200, left: "50%", transform: "translateX(-55%)" }}>
                        <Select value={dorm} onChange={handleDropdownChange} inputProps={{MenuProps: {disableScrollLock: true}}}>
                            <MenuItem value="Hedrick">Hedrick</MenuItem>
                            <MenuItem value="Sunset">Sunset</MenuItem>
                            <MenuItem value="Rieber">Rieber</MenuItem>
                            <MenuItem value="Deneve">Deneve</MenuItem>
                            <MenuItem value="Saxon">Saxon</MenuItem>
                        </Select>
                        <FormHelperText>Select a dorm</FormHelperText>
                    </FormControl>
                </div>
                <button className='authSubmit' onClick={handleSubmit}> Submit </button>
                <br />
            </form>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableScrollLock={true}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                        Profile updated successfully!
                    </Typography>
                </Box>
            </Modal>
            <GoBack />
        </div>
    )
}

export default EditProfilePage;