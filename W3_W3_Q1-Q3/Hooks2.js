import React, { useState } from "react";
import { Button } from "@mui/material";

const Hooks2 = () => {
    const [Name, setName] = useState('Mari Kramberi');
    const [gender, setGender] = useState('Female');
    const [designation, setDesignation] = useState('Dancer');
    const [hobby, setHobby] = useState('Hiking');
    const [race, setRace] = useState('Russian');
    const [isValid, setIsValid] = useState(false);

    const handleUpdate = () => {
        setDesignation('Model');
        setHobby('Singing');
    }
    return (
        <>
        <h2>Question 3b</h2>
            <p>Name: {Name}</p>
            <p>Gender: {gender}</p>
            <p>Profession: {designation}</p>
            <p>Hobby: {hobby}</p>
            <p>Race: {race}</p>
           

            {/* <Button variant="outlined" onClick={() => set('harry')}>Update String</Button> */}
            {/* <Button variant="outlined" onClick={() => setAge(30)}>Update Number</Button> */}
            <Button variant="outlined" onClick={handleUpdate}>Update Profile</Button>
        </>
    )
}

export default Hooks2;
