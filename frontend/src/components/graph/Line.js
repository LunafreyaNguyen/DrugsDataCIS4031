import React, { useState } from 'react';
import './graph.css';
import Option from './Option.js';
import { Button, Autocomplete, TextField, Grid, Box} from '@mui/material';
import { DeleteRounded,AddCircle } from '@mui/icons-material';

function Line({ name, id, deleteF, update, questions, labels,data2 }) {
    const [question, setQuestion] = useState();
    const [opts, setOpts] = useState([]);
    /*const [date, setDate] = useState('Title');
    const [date, setDate] = useState('X-Axis');
    const [date, setDate] = useState('Y-Axis');*/

    function addOpt(labelID) {
        let temp = opts;
        let temp2 = { id: temp.length, label: labelID ,name: "" };
        temp.push(temp2);
        setOpts([...temp]);
    }

    function updateOpt(num, name) {
        opts.at(num).name = name;
    }

    function deleteOpt(id) {
        let temp = opts;
        temp.splice(id, 1);
        for (var i = 0; i < temp.length; i++) {
            temp.at(i).id = i;
        }
        setOpts([...temp]);
    }

    function test() {
        console.log(opts);
    }
    function presets() {

    }
    
    return (
        <>
            <div className="line">
                <header className="line-header">
                    <Grid container spacing={ 1 }>
                        <TextField id="standard-basic" label={"Line " + id + " Name:"} variant="standard" onChange={(event) => { update(id, event.target.value) }} />
                        <Button variant="outlined" color="error" onClick={() => { deleteF(id) }} ><DeleteRounded /></Button>
                        <Button variant="outlined" onClick={() => { test() }} ><AddCircle/>test</Button>
                        <Autocomplete
                            disablePortal
                            id="questions"
                            options={
                            [{ label: 'Question 0 ', abbreviation: 'cigever'},
                            { label: 'Question 0 ', abbreviation: 'cigever' },
                            { label: 'Question 0 ', abbreviation: 'cigever' },
                            { label: 'Question 0 ', abbreviation: 'cigever' },
                            { label: 'Question 0 ', abbreviation: 'cigever' },]}
                            onInputChange={(event,newInputValue) => {setQuestion(newInputValue)} }
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Select Question" />}
                        />
                        {
                            labels.map((label) => (
                                <>
                                    <Grid item xs={4}>
                                        Label: { label.name }<br/>
                                        <Button variant="outlined" onClick={() => { addOpt(label.id) }} ><AddCircle />Add Option to Label</Button>
                                
                                        {opts.map((opt) => (
                                        opt.label === label.id &&
                                        <Option key={opt.id} id={opt.id} name={opt.name} deleteF={deleteOpt} update={updateOpt} />
                                        ))}
                                    </Grid>
                                    <br />
                                </>
                            ))
                        }
                    </Grid>
                </header>
            </div>
        </>

    );
}

export default Line;
