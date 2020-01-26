import React, { Component } from 'react';
import '../App/App.css';
import { HashRouter as Router, Link } from 'react-router-dom';

class ThankYou extends Component {
    render() {
        return (
            <>
                <div className="App"></div>
                <h3>thank you!</h3>
                <Router>
                    <Link to="/"><button>do it again</button></Link>
                </Router>
            </>
        );
    }
}

export default ThankYou;