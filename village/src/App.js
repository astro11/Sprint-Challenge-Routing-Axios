import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfForm exact path="/" component={ SmurfForm } />
        <Smurfs path="/smurfs/:id" component={ Smurfs } />
      </div>
    );
  }
}

export default App;
