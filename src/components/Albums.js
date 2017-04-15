import React, { Component, PropTypes } from 'react';
import { UISref } from 'ui-router-react';

export default class Albums extends Component {
  constructor() {
    super();
    this.state = { page: 1, items: 10 };
  }

  render() {
    let { albums } = this.props.resolves;
    let { page, items } = this.state;

    let rows = albums
      .filter(album => album.id > (page - 1) * items && album.id <= page * items)
      .map(album => (
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
        <h3>Albums</h3>
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
