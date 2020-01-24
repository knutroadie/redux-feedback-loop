import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Supported extends Component {
  render() {
    return (
      <div className="App"></div>
      <h3>anything you want us to know?</h3>
      <input type="text"></input>
      <button>next</button>
    );
  }
}

export default Supported;