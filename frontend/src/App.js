// Importing all necessary data and modules
import React from "react";
import Test from './Test.js';
import Title from './title.js'
import Graph from './components/graph/Graph.js'
   
// Main function that displays the webpage- "injects" HTML
function App() {
  return (  // Returns the HTML to "inject"
      <>
          <Title/>
          <Graph />
          <Test/>
      </>
  );
}

export default App;
