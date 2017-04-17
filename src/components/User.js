import React, { Component, PropTypes } from 'react';

export default class User extends Component {
  render() {
    let { user } = this.props.resolves;

    if (user.err) {
      return (<div className="alert alert-danger">{user.err.message}</div>);
    }

    return (
      <div className="user">
        <h3>User</h3>
        <table className="table">
          <tbody>
            <tr><th>Id</th><td>{user.id}</td></tr>
            <tr><th>Name</th><td>{user.name}</td></tr>
            <tr><th>Username</th><td>{user.username}</td></tr>
            <tr><th>E-mail</th><td>{user.email}</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

User.propTypes = {
  resolves: PropTypes.shape({
    user: PropTypes.object
  })
}
