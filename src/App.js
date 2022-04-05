import './App.css';
import Title from './title';
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <div class="chart">
        <div class="chartTitle">
          <h1>Test Chart</h1>
        </div>
          <LineChart
            width={750}
            height={450}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
              strokeDasharray="3 4 5 2"
            />
          </LineChart>
        </div>
        <div class="chartDataBlock">
          <h1>Test Chart Information</h1>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. 
            Ut enim ad minim veniam, 
            quis nostrud exercitation 
            ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. 
            Duis aute irure dolor in 
            reprehenderit in voluptate 
            velit esse cillum dolore eu 
            fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui 
            officia deserunt mollit anim id 
            est laborum.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
