import React, {Component} from "react";
import Ab from './header_Abstract'
import Motivation from './header_Motivation'
import Title from './title_co'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';


export default class headerAppController extends Component {
  state = {};
  render() {
    return (
    <div className="header">
      <h1 onClick>Motivation for Interaktionsdesign</h1>
      <Router>
        <div className="App">
          <ul className="App-header">
            <li className="li1">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Abstracts">Previous projects</Link>
            </li>
          </ul>
          <div className="title"><Title /></div>
          <Routes>
            <Route exact path="/Abstracts" element={<Ab />}></Route>
            <Route exact path="/" element={<Motivation />}></Route>
          </Routes>
        </div>
      </Router>
      
      </div>
    );
  }
}
