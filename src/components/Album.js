import React, { Component, PropTypes } from 'react';
import { UISref } from 'ui-router-react';

export default class Album extends Component {
  render() {
    let { album } = this.props.resolves;
    
    return (
      <div>
        <h3>Album</h3>

        <div>Id: {album.id}</div>
        <div>Title: {album.title}</div>
        <div>User Id: {album.userId}</div>

        <UISref to="albums"><button>back to albums</button></UISref>
      </div>
    );
  }
}

Album.propTypes = {
  resolves: PropTypes.shape({
    album: PropTypes.object
  })
}
