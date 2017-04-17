import React, { Component, PropTypes } from 'react';

export default class Fail extends Component {
  render() {
    let { fail } = this.props.resolves;

    if (fail.err) {
      return (<div className="alert alert-danger">{fail.err.message}</div>);
    }

    return (<div>Blah, blah, blah...</div>);
  }
}

Fail.propTypes = {
  resolves: PropTypes.shape({
    fail: PropTypes.object
  })
}
