import React, { Component } from 'react';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';


class App extends Component {

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
            <Route path="/review" component={Review} />
            <Route path="/thankyou" component={ThankYou} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);