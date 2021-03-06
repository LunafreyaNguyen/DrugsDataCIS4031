import React, { useState, useEffect } from 'react';
import './graph.css';

import { data } from './testData';    // Importing test data from testData.js
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"; //Importing recharts objects
import { strokesPreset } from './Presets/Strokes.js'

function Chart({ data2,title,setTitle,xaxis,setXaxis,yaxis,setYaxis,lines }) {
    /*const [date, setDate] = useState('Title');
    const [date, setDate] = useState('X-Axis');
    const [date, setDate] = useState('Y-Axis');*/

    /*useEffect(() => {
        console.log(data2)
    });*/
    function presets() {
        console.log(data);
        data[0]["Help"] = 0;
        console.log(data[0])
    }

    return (
        <>
            {/* White block on the left- contains the chart and title of the chart */}
            <div className="chart">
                <div className="chartTitle"> 
                    <h1>{title}</h1>
                </div>

                {/* Properties of the chart */}
                <LineChart
                    width={750}
                    height={450}
                    data={data2} // Change data here
                    margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" label={{ value: xaxis, position: 'insideBottom', offset: -2 }} />
                    <YAxis label={{ value: yaxis, angle: -90, position: 'insideLeft', offset: 0 }} />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />

                    {lines.map((line) => (<><Line type="monotone" dataKey={line.name} stroke={strokesPreset[line.id].stroke} /></>)) }
                </LineChart>

                {/* Form to Change the Values of the Graph*/}
                <form>
                    <label >Graph Title:  </label>
                    <input type="text" id="graphTitle" name="graphTitle" value={title} onChange={(e) => setTitle(e.target.value)}></input><br />
                    <label >Graph X-axis Name:  </label>
                    <input type="text" id="graphX" name="graphX" value={xaxis} onChange={(e) => setXaxis(e.target.value)}></input><br />
                    <label >Graph Y-axis Name:  </label>
                    <input type="text" id="graphY" name="graphY" value={yaxis} onChange={(e) => setYaxis(e.target.value)}></input><br />
                </form>
            </div >
        </>

    );
}

export default Chart;
