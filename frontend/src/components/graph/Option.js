import React, { useState } from 'react';
import './graph.css';
import { Button, Autocomplete, TextField } from '@mui/material';
import { DeleteRounded } from '@mui/icons-material';

function Option({ name, id, deleteF, update }) {
    /*const [date, setDate] = useState('Title');
    const [date, setDate] = useState('X-Axis');
    const [date, setDate] = useState('Y-Axis');*/
    const [tempName, setTempName] = useState(name);

    function updateName(e) {
        setTempName(e);
    }
    function presets() {

    }

    return (
        <>
            <div className="option">
                <header className="option-header">
                    <TextField id="standard-basic" label="" value={tempName} variant="standard" onChange={(event) => { update(id, event.target.value); updateName(event.target.value) }} />
                    <Button variant="outlined" color="error" onClick={() => { deleteF(id) }} ><DeleteRounded /></Button>
                </header>
            </div>
        </>

    );
}

export default Option;
