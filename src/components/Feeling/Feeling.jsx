import React, { Component } from 'react';
// import axios from 'axios';
import '../App/App.css';

class Feeling extends Component {
    render() {
        return (
            <>
                <div className="App"></div>
                <h3>how do you feel today?</h3>
                <input type="number" name="quantity" min="1" max="5"></input>
                <button>next</button>
            </>
        );
    }
}

export default Feeling;