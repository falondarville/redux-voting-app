import React, { Component } from 'react';
import { voteReact, voteAngular, voteVuejs } from './actions';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.store = this.props.store;
  }

  // invoked when the corresponding icon is clicked
  handleVoteReact = () => {
    // dispatch action object to the store
    this.store.dispatch(voteReact());
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }

  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center'}}> 
          <h2>What is your favorite front-end framework?</h2>
          <h4>Click on the logos below to vote.</h4>
          <br />
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <img src="react_logo.png" height="96" alt="React" onClick={this.handleVoteReact}></img>
            </div>
            <div className="col-xs-2">
              <img src="angular_logo.png" height="96" alt="Angular" onClick={this.handleVoteAngular}></img>
            </div>
            <div className="col-xs-2">
              <img src="vuejs_logo.png" height="96" alt="Vuejs" onClick={this.handleVoteVuejs}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
