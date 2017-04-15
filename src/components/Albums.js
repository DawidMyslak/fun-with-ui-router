import React, { Component, PropTypes } from 'react';
import { UISref } from 'ui-router-react';

export default class Albums extends Component {
  render() {
    let { albums } = this.props.resolves;

    let rows = albums.map(album => (
      <tr key={album.id}>
        <td>
          {album.id}
        </td>
        <td>
          <UISref to="album" params={{ albumId: album.id }}>
            <a>{album.title}</a>
          </UISref>
        </td>
      </tr>
    ));

    return (
      <div>
        <h3>Some albums:</h3>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

Albums.propTypes = {
  resolves: PropTypes.shape({
    albums: PropTypes.arrayOf(PropTypes.object)
  })
}
