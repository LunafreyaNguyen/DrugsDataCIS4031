import './graph.css';

import { data } from './testData';    // Importing test data from testData.js
import {                            //  //
    LineChart,                        //  //
    Line,                             //  //
    XAxis,                            //  //
    YAxis,                            //  //    Importing all necessary parts of recharts.js (creates charts)
    CartesianGrid,                    //  // 
    Tooltip,                          //  //
    Legend                              //  //
} from "recharts";                  //  //


function graph() {
    return (
        <div className="graph">
            <header className="graph-header">
                {/* White block on the left- contains the chart and title of the chart */ }
                <div class="chart">
                    <div class="chartTitle">
                        <h1>Age of First Usage (Marijuana vs Meth)</h1>
                    </div>

                {/* Properties of the chart */}
                <LineChart
                    width={750}
                    height={450}
                    data={data} // Change data here
                    margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" label={{ value: 'Age', position: 'insideBottom', offset: -2 }} />
                    <YAxis label={{ value: 'Users', angle: -90, position: 'insideLeft', offset: 0 }} />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Line
                        type="monotone"
                        dataKey="Marijuana"
                        stroke="#8884d8"
                        strokeDasharray="5 5"
                    />
                    <Line
                        type="monotone"
                        dataKey="Meth"
                        stroke="#82ca9d"
                        strokeDasharray="3 4 5 2"
                    />
                </LineChart>
                {/* End of the properties of the chart */}
                    </div >
            </header>
        </div>
    );
}

export default graph;
