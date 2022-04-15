import React, { useState } from 'react';
import './graph.css';
import Option from './Option.js';
import { Button, Autocomplete, TextField, Grid, Box} from '@mui/material';
import { DeleteRounded, AddCircle,ArrowDownward,ArrowUpward } from '@mui/icons-material';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getQR } from '../calls/actions/queryActions.js';
import { optionsAge, optionsPresets } from './Presets/Options.js'


function Line({ lines,name, id, deleteF, update, questions, labels, data2 ,setData2 }) {
    const [question, setQuestion] = useState();
    const [opts, setOpts] = useState([]);
    const [toggleOpts, setToggleOpts] = useState(false);
    const [toggleResponses, setToggleResponses] = useState(false);
    const [responses, setResponses] = useState([]);
    let needChange = false;
    /*const [date, setDate] = useState('Title');
    const [date, setDate] = useState('X-Axis');
    const [date, setDate] = useState('Y-Axis');*/
    const ss = useStore();
    const backlogs = useSelector((state) => {
        
    });

    const dispatch = useDispatch();

    async function queryBuilder() {
        let temp2 = [];
        needChange = true;
        const query = `select count(*) from (select * from question_meaning where question_meaning.abbr=\'${question}\') Question,question_response,response_meaning where question_response.questionID = Question.questionID AND Question.questionID = response_meaning.questionId AND question_response.response = response_meaning.response AND (`;
        
        for (let i = 0; i < labels.length; i++)
        {
            let completeQuery = "";
            completeQuery += "( " + query;
            for (let j = 0; j < opts.length; j++)
            {
                if (opts[j].label === i)
                {
                    completeQuery += " response_meaning.response =" + opts[j].name + " OR ";
                }
            }
            completeQuery += "0>1 ))";
            //console.log(completeQuery)
            let querySend = { query: completeQuery };
            await dispatch(getQR(querySend));
            let temp;
            temp = data2[i];
            if (temp == null) {
                temp = {};
            }
            temp["name"] = labels[i].name;
            //console.log(temp);
            //console.log(ss.getState().query.query.rows[0][0]);
            temp[lines[id].name] = ss.getState().query.query.rows[0][0];
            temp2.push(temp);
            //console.log(temp2);
        }
        setData2(temp2);
        
        //console.log(ss.getState());
    }

    function toggleResponse() {
        if (toggleResponses) { setToggleResponses(false); }
        else { setToggleResponses(true); }
    }

    async function updateResponses(abbreviation)
    {
        const query = {
            query: `select * from response_meaning,question_meaning where question_meaning.questionID = response_meaning.questionID AND question_meaning.abbr='${abbreviation}'`
        };
        await dispatch(getQR(query));
    }

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
    function test() { }
    function toggleOptions() {
        if (toggleOpts) { setToggleOpts(false); }
        else { setToggleOpts(true); }
    }

    function setOptionAsPreset(preset)
    {
        if (preset === 'Age') { setOpts(optionsAge); }
        else if (preset === 'Empty') { setOpts([]) }
    }
    
    return (
        <>
            <div className="line">
                <header className="line-header">
                    <Grid alignItems='center' container spacing={1}>
                        <Grid item xs={4}>
                            <TextField id="standard-basic" label={"Line " + id + " Name:"} variant="standard" onChange={(event) => { update(id, event.target.value) }} />
                        </Grid>
                        <Grid item xs={4}>
                            <Autocomplete
                                disablePortal
                                id="questions"
                                options={questions}
                                onChange={(event, value) => { setQuestion(value.abbreviation); updateResponses(value.abbreviation); }}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Select Question" />}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Autocomplete
                                disablePortal
                                id="presets"
                                options={optionsPresets}
                                onChange={(event, value) => {
                                    setOptionAsPreset(value.label)
                                }}
                                sx={{ width: 150 }}
                                renderInput={(params) => <TextField {...params} label="Options Presets" />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" color="error" onClick={() => { deleteF(id) }} ><DeleteRounded /></Button>
                            <Button variant="outlined" onClick={() => { queryBuilder() }} >Add Line to Chart</Button>
                            <Button variant="outlined" onClick={() => { toggleOptions() }} >{toggleOpts ? <ArrowUpward /> : <ArrowDownward />}</Button>
                        </Grid>
                        
                        {
                            toggleOpts && labels.map((label) => (
                                <>
                                    <Grid item xs={4}>
                                        Label: {label.name}<br />
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
