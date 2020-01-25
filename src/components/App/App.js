import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';


class App extends Component {

  // componentdidmount

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <div>
            <Route exact path="/" component={Feeling} />
            <Route path="/understanding" component={Understanding} />
            <Route path="/supported" component={Supported} />
            <Route path="/comments" component={Comments} />
          </div>
        </Router>
        <br />
        <Feeling />
        <Understanding />
        <Supported />
        <Comments />
        <Review />
      </div>
    );
  }
}

export default connect()(App);