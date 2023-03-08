import React from 'react';
import { useNavigate } from "react-router-dom";

const EditProfileButton = () => {
    const history = useNavigate();
    const handleEditProfile = () => {
        history("/edit_profile");
    }
    return (
        <button className='editProfileButton' onClick = {handleEditProfile}> Edit Profile </button>
    )
}

export default EditProfileButton;