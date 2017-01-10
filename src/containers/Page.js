import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoggedOut from '../components/LoggedOut';
import LoggedIn from '../components/LoggedIn';
import { fetchLogin, receivedLogout } from '../redux/actions'


class Page extends Component {
  constructor() {
    super();

    this.logUserIn = this.logUserIn.bind(this);
    this.logUserOut = this.logUserOut.bind(this);
  }

  logUserIn(username, password) {
    this.props.dispatch(fetchLogin(username, password));
  }

  logUserOut() {
    this.props.dispatch(receivedLogout());
  }

  render() {
    return (
      <div>
        {this.props.user.success ?
          (<LoggedIn userId={this.props.user.id} logUserOut={this.logUserOut} />) :
          (<LoggedOut errorMessage={this.props.errorMessage} logUserIn={this.logUserIn} />)
        }
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    user: state.user,
    errorMessage: state.errorMessage
  }
}
export default connect(mapStateToProps)(Page);
