import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feeling from './Feeling/Feeling';
import Understanding from './Understanding/Understanding';
import Supported from './Supported/Supported';
import Comments from './Comments/Comments';
import Review from './Review/Review';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <Feeling />
          <Understanding />
          <Supported />
          <Comments />
          <Review />
        </header>
        <br />
      </div>
    );
  }
}

export default App;