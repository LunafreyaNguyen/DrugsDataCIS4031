import './App.css';
import Title from './title';
import React from "react";
import {data} from './testData';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <div class="chart">
        <div class="chartTitle">
          <h1>Age of First Usage (Marijuana vs Meth)</h1>
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
            <XAxis dataKey="name" label={{ value: 'Age', position: 'insideBottom', offset: -2 }}/>
            <YAxis label={{ value: 'Users', angle:-90, position: 'insideLeft', offset: 0}} />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
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
        </div>
        <div class="chartDataBlock">
          <h1>Chart Information</h1>
          <p>
            To take a look at sample queries of interest, select a dropdown below.
          </p>
          <p>
            To create your own queries, click <a href='#'>here</a>.
          </p>
          <form action="/action_page.php">
            <label for="cars">Choose a dataset to use: </label>
            <select id="cars" name="cars">
              <option value="volvo">Age of First Usage (Marijuana vs Meth)</option>
              <option value="saab">Age of First Usage (Marijuana vs Cocaine)</option>
              <option value="fiat">Age of First Usage (Cocaine vs Meth)</option>
              <option value="audi">Age of First Usage (Vaping vs Marijuana)</option>
            </select>
            <input type="submit" value="View Query" />
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
