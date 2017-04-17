import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.state = { greeting: 'Hello' };
    this.toggleGreeting = this.toggleGreeting.bind(this);
  }

  toggleGreeting() {
    this.setState({
      greeting: this.state.greeting === 'Hello' ? 'Suuup' : 'Hello'
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.greeting} world!</h3>
        <button onClick={this.toggleGreeting} className="btn btn-primary">Toggle greeting</button>
      </div>
    );
  }
}
