import React, { Component } from 'react';
import axios from 'axios';
import '../App/App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Review extends Component {

    //state
    // state = {
    //     feedback: {
    //         feeling: 0,
    //         understanding: 0,
    //         supported: 0,
    //         comments: ''
    //     },
    // };
    // // setState function
    // makeFeedback = () => {
    //     console.log(this.state.feedback, this.props.reduxState);
    //     this.setState({
    //         feedback: {
    //             ...this.state.feedback,
    //             feeling: this.props.reduxState.Feeling,
    //             understanding: this.props.reduxState.Understanding,
    //             supported: this.props.reduxState.Supported,
    //             comments: this.props.reduxState.Comments
    //         }
    //     })
    //     console.log(this.state.feedback);        
    //     this.dispatchFeedback()
    // }
    // click listener
    // dispatchFeedback = () => {
    //     console.log('hit dispatch', this.state.feedback);
    //     this.props.dispatch({
    //         type: 'SUBMIT',
    //         payload: this.state.feedback
    //     });
    //     // this.props.history.push('/');
    // }


    //axios post request
    //     axios.post('/feedback', (req, res) => {
    //         console.log(req.body);
    //         let feedback = req.body;
    //         //sanitize the db insert
    //         let queryText = `
    //           INSERT INTO "Koala Table"("gender", "name", "age", "readyToTransfer", "notes")
    //           VALUES ($1, $2, $3, $4, $5);
    //           `;
    //         pool.query(queryText, [addKoala.gender, addKoala.name, addKoala.age, addKoala.readyToTransfer, addKoala.notes])
    //             .then((result) => {
    //                 res.sendStatus(201);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 res.sendStatus(500);
    //             });

    //     });

    postFeedback = () => {
        let feedback = {
            feeling: this.props.reduxState.Feeling,
            understanding: this.props.reduxState.Understanding,
            supported: this.props.reduxState.Supported,
            comments: this.props.reduxState.Comments
        }
        // event.preventDefault();
        console.log(`posting feedback`, feedback);
        axios.post('/feedback', feedback)
            .then(() => {
            })
            .catch((error) => {
                alert(error)
            })
    }

    render() {
        return (
            <>
                <div className="App">
                    <div>feeling: {this.props.reduxState.Feeling}</div>
                    <div>understanding: {this.props.reduxState.Understanding}</div>
                    <div>supported: {this.props.reduxState.Supported}</div>
                    <div>comments: {this.props.reduxState.Comments}</div>
                    <Router>
                        <Link to="/thankyou" onClick={() => this.postFeedback()}>submit</Link>
                    </Router>
                </div>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxStateOnProps)(Review);