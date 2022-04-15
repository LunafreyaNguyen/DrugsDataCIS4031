import React, { useState, useEffect } from 'react';
import './graph.css';
import Chart from './Chart.js';
import Line from './Line.js';
import Label from './Label.js';
import { questions } from './Questions.js';
import { Button, Autocomplete, TextField, Grid, Box } from '@mui/material';
import { labelAgePreset, labelPresets } from './Presets/LabelsPresets.js';


function Graph() {
    const [lines, setLines] = useState([]);
    const [labels, setLabels] = useState([]);
    const [question, setQuestion] = useState(questions);
    const [title, setTitle] = useState('Title');
    const [xaxis, setXaxis] = useState('X-Axis');
    const [yaxis, setYaxis] = useState('Y-Axis');
    const [data2, setData2] = useState([]);


    function test() { console.log(labels) }

    function setLabelPreset(e)
    {

    }

    function addLine()
    {
        let temp = lines;
        let temp2 = { id: temp.length, name: "" };
        temp.push(temp2);
        setLines([...temp]);

    }

    function updateLine(num,name) {
        lines.at(num).name = name;
    }

    function deleteLine(id)
    {
        let temp = lines;
        temp.splice(id, 1);
        for (var i = 0; i < temp.length; i++) {
            temp.at(i).id = i;
        }
        setLines([...temp]);
    }

    function addLabel()
    {
        let temp = labels;
        let temp2 = { id: temp.length, name: "" };
        temp.push(temp2);
        setLabels([...temp]);
    }

    function updateLabel(num,name) {
        labels.at(num).name = name;
        setLabels([...labels]);
    }

    function deleteLabel(id)
    {
        let temp = labels;
        temp.splice(id, 1);
        for (var i = 0; i < temp.length; i++)
        {
            temp.at(i).id = i;
        }
        setLabels([...temp]);
    }

    return (
        <>
            <div className="graph">
                <header className="graph-header">
                    <Grid container direction="row" spacing={2} columnSpacing={{ xs: 2, sm: 3} }>
                        <Grid item xs={12} lg={8} xl={6}>
                            <Chart title={title} setTitle={setTitle} xaxis={xaxis} yaxis={yaxis} setXaxis={setXaxis} setYaxis={setYaxis} data2={data2} lines={lines}  />
                        </Grid>
                        {/* Block on right side- contains information about the chart on the left */}
                        <Grid item xs={12} lg={4} xl={ 6 }>
                            <div className="chartDataBlock">
                                <h1>Chart Information</h1>
                                <p>
                                    To take a look at sample queries of interest, select a dropdown below.
                                </p>
                                <p>
                                    To create your own queries, click <a href='#'>here</a>.
                                </p>
                            </div>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <button onClick={() => { addLabel() }} >Add Label</button>
                                    <Autocomplete
                                        disablePortal
                                        id="questions"
                                        options={ labelPresets }
                                        onChange={(event, value) => { setLabelPreset(value.label) }}
                                        sx={{ width: 400 }}
                                        renderInput={(params) => <TextField {...params} label="Select Question" />}
                                    />
                                </Grid>
                                {
                                    labels.map((label) => (<Grid item xs={4}><Label key={label.id} id={label.id} name={label.name} deleteF={deleteLabel} update={updateLabel} /></Grid>))
                                }

                                <Grid item xs={12}>
                                    <button onClick={() => { addLine() }} >Add Line</button>
                                    <button onClick={() => { test() }} >Output Labels</button>
                                </Grid>
                                <Grid item xs={12}>
                                    {
                                        lines.map((line) => (<Line key={line.id} data2={data2} questions={question} lines={ lines } id={line.id} name={line.name} deleteF={deleteLine} update={updateLine} labels={labels} setData2={setData2} />))
                                        
                                    }
                                </Grid>
                                
                            </Grid>

                        </Grid>
                    </Grid>
                </header>
            </div>
        </>

    );
}

export default Graph;
