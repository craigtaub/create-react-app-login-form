import React, { Component } from 'react';

class LoggedIn extends Component {
  constructor() {
    super();

    this.logOutHandler = this.logOutHandler.bind(this);
  }


  logOutHandler(e) {
    e.preventDefault();
    this.props.logUserOut();
  }
  render() {
    return (
      <div>
        Thanks for logging in {this.props.userId}
        <button title="Log out" onClick={this.logOutHandler} type="submit">Log out</button>
      </div>
    );
  }
}

export default LoggedIn;
