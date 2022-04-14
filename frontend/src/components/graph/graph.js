import React, { useState, useEffect } from 'react';
import './graph.css';
import Chart from './Chart.js';
import Line from './Line.js';
import Label from './Label.js';
import {questions} from './Questions.js';


function Graph() {
    /*const [date, setDate] = useState('Title');
    const [date, setDate] = useState('X-Axis');
    const [date, setDate] = useState('Y-Axis');*/
    const [lines, setLines] = useState([]);
    const [labels, setLabels] = useState([]);
    const [question, setQuestion] = useState(questions);
    let data2 = "HI";


    function test() {console.log(labels) }

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
        console.log(labels)
    }

    return (
        <>
            <div className="graph">
                <header className="graph-header">

                    <Chart data2={data2 }/>
                    {/* Block on right side- contains information about the chart on the left */}

                    <div className="chartDataBlock">
                        <h1>Chart Information</h1>
                        <p>
                            To take a look at sample queries of interest, select a dropdown below.
                        </p>
                        <p>
                            To create your own queries, click <a href='#'>here</a>.
                        </p>
                    </div>
                </header>
            </div>
            {
                labels.map((label) => (<Label key={label.id} id={label.id} name={label.name} deleteF={deleteLabel} update={updateLabel}/>))
            }
            <button onClick={() => { addLabel() }} >Add Label</button>
            {
                lines.map((line) => (<Line key={line.id} questions={question} id={line.id} name={line.name} deleteF={deleteLine} update={updateLine} labels={ labels }/>))
            }
            <button onClick={() => { addLine() }} >Add Line</button>
            <button onClick={() => { test() }} >Output Labels</button>
        </>

    );
}

export default Graph;
