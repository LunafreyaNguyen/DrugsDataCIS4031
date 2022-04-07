// Importing all necessary data and modules
import './App.css';                 // Style Sheets
import Title from './title';        // The title bar: CIS4031: Graphs of the National Survey of Drug Use and Health (2015-2019)
import React from "react";          // Importing React.js
import {data} from './testData';    // Importing test data from testData.js
import {                            //  //
  LineChart,                        //  //
  Line,                             //  //
  XAxis,                            //  //
  YAxis,                            //  //    Importing all necessary parts of recharts.js (creates charts)
  CartesianGrid,                    //  // 
  Tooltip,                          //  //
  Legend                            //  //
} from "recharts";                  //  //

// Main function that displays the webpage- "injects" HTML
function App() {
  return (  // Returns the HTML to "inject"
    <div className="App">
      <header className="App-header">
        <Title /> {/* This is the title, created in title.js */}

        {/* White block on the left- contains the chart and title of the chart */}
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
            {/* End of the properties of the chart */}
        </div>

        {/* Block on right side- contains information about the chart on the left */}
        <div class="chartDataBlock">
          <h1>Chart Information</h1>
          <p>
            To take a look at sample queries of interest, select a dropdown below.
          </p>
          <p>
            To create your own queries, click <a href='#'>here</a>.
          </p>

          {/* Input portions here (choose a dataset to view) */}
          <form action="/action_page.php">
            <label for="cars">Choose a dataset to view: </label>
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
