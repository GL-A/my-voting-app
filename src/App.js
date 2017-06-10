import React, { Component } from 'react';
import { voteAngular, voteVue, voteReact } from './actions';
import './App.css';

class App extends Component {
  constructor( props ) {
    super( props );

    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch( voteAngular() );
  }
  handleVoteReact = () => {
    this.store.dispatch( voteReact() );
  }
  handleVoteVue = () => {
    this.store.dispatch( voteVue() );
  }
  render() {
    return (
      <div>
        <div className="jumbotron" style={{ textAlign: 'center'}}>
          <img height="96" alt="naruto" src="https://art-s.nflximg.net/54244/272bd909045456af974c61068f168cafc3a54244.jpg" />
          <h2>What is your favorite front end framework in 2017?</h2>
          <h4>Click below to vote!</h4>
          <br/>
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <img alt="shut your face" onClick={ this.handleVoteReact } height="96" src="https://facebook.github.io/react/img/logo.svg"  />
            </div>

            <div className="col-xs-2">
              <img alt="shut your face" onClick={ this.handleVoteAngular } height="96" src="https://angular.io/resources/images/logos/angular/angular.svg"  />
            </div>

            <div className="col-xs-2">
              <img alt="shut your face" onClick={ this.handleVoteVue } height="96" src="https://vuejs.org/images/logo.png"  />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
