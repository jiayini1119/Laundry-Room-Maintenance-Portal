import React from 'react';
import { useNavigate } from "react-router-dom";
import "./HeaderFeatures.css";

const EditProfileButton = () => {
    const history = useNavigate();
    const handleEditProfile = () => {
        history("/edit_profile");
    }
    return (
        <button className='editProfile' onClick = {handleEditProfile}> Edit Profile </button>
    )
}

export default EditProfileButton;