import React from 'react'
import './title.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from "./components/navbar/navbar";
import FAQ from './components/navbar/FAQ';
import Start from './components/navbar/Start';
/*
<Router>
<NavBar />
<Routes>
  <Route path='/faq' exact component={<FAQ />} />
  <Route path='/Start' component={<Start />} />
</Routes>
</Router>
*/
function Title() {
  return (
    <div className='Title'>
      <h1>CIS4031: Graphs of the National Survey of Drug Use and Health (2015-2019)</h1>
    </div>
  )
}

export default Title