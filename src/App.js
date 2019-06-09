import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Update from './components/home/Update';

function App() {
  return (
    <div className="App">
      <Router>
      <Home/>

      <Route path="/Update/:id" exact component={Update}/>
      </Router>
    </div>
  );
}

export default App;
