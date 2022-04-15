import React, { useState } from 'react';
import './graph.css';
import { Button, Autocomplete, TextField } from '@mui/material';
import { DeleteRounded,  } from '@mui/icons-material';
function Label({ name, id, deleteF, update}) {
    /*const [date, setDate] = useState('Title');
    const [date, setDate] = useState('X-Axis');
    const [date, setDate] = useState('Y-Axis');*/


    function updateGraph() {

    }
    function presets() {

    }

    return (
        <>
            <div className="label">
                <header className="label-header">
                    <TextField id="standard-basic" label={ "Label " + id } variant="standard" onChange={(event) => { update(id,event.target.value) } }/>
                    <Button variant="outlined" color="error" onClick={() => { deleteF(id) }} ><DeleteRounded /></Button>
                </header>
            </div>
        </>

    );
}

export default Label;
