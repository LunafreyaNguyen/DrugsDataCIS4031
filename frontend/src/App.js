// Importing all necessary data and modules
import React from "react";
import Test from './Test.js';
   
// Main function that displays the webpage- "injects" HTML
function App() {
    const title = 'Hi';
  return (  // Returns the HTML to "inject"
      <>
          <h1>{title}</h1>
          <Test/>
    </>
  );
}

export default App;
