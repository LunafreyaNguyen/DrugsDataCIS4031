import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/FAQ">FAQ</Link>
    </li>
    <li>
      <Link to="/Start">Start</Link>
    </li>
  </div>
  );
}
export default navbar;