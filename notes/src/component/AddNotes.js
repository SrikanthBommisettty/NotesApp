// component/AddNotes.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addNotes } from '../redux/action';

const AddNotes = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [time, setTime] = useState("");

    function add() {
        const note = {
            title: title,
            desc: desc,
            time: new Date(time)
        };

        dispatch(addNotes(note));
        setTitle("");
        setDesc("");
        setTime("");
    }

    return (
        <div className='d-flex flex-column w-25'>
            <TextField
                id="outlined-basic"
                label="Heading"
                variant="outlined"
                style={{ margin: "20px" }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField 
                id="outlined-basic" 
                label="Description" 
                variant="outlined" 
                style={{ margin: "20px" }} 
                value={desc} 
                onChange={(e) => setDesc(e.target.value)} 
            />
            <TextField 
                id="outlined-basic" 
                label="Time" 
                variant="outlined" 
                style={{ margin: "20px" }} 
                type="datetime-local"  
                value={time} 
                onChange={(e) => setTime(e.target.value)}
            />

            <Button variant="contained" color="primary" onClick={add}>Add</Button>
        </div>
    );
};

export default AddNotes; // This line is essential for default export
