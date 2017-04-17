import React, { Component, PropTypes } from 'react';
import { UISref } from 'ui-router-react';

export default class Album extends Component {
  render() {
    let { album } = this.props.resolves;

    return (
      <div className="album">
        <h3>Album</h3>
        <table className="table">
          <tbody>
            <tr><th>Id</th><td>{album.id}</td></tr>
            <tr><th>Title</th><td>{album.title}</td></tr>
            <tr><th>User Id</th><td>{album.userId}</td></tr>
          </tbody>
        </table>
        <UISref to="albums"><button className="btn btn-primary">Back to albums</button></UISref>
      </div>
    );
  }
}

Album.propTypes = {
  resolves: PropTypes.shape({
    album: PropTypes.object
  })
}
