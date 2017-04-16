import React, { Component, PropTypes } from 'react';
import { UISref } from 'ui-router-react';

export default class Albums extends Component {
  constructor() {
    super();
    this.state = { page: 1, items: 10 };
    this.setPage = this.setPage.bind(this);
    this.handleItemsChange = this.handleItemsChange.bind(this);
  }

  componentDidMount() {
    let total = this.props.resolves.albums.length;
    let pages = Math.ceil(total / this.state.items);
    this.setState(Object.assign(this.state, { total, pages }));
  }

  setPage(page) {
    this.setState(Object.assign(this.state, { page }));
  }

  handleItemsChange(event) {
    let items = parseInt(event.target.value, 10);
    let pages = Math.ceil(this.state.total / items);
    this.setState(Object.assign(this.state, { page: 1, items, pages }));
  }

  render() {
    let { albums } = this.props.resolves;
    let { page, items, pages } = this.state;

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

    let pagination = Array(pages)
      .fill()
      .map((_, i) => (
        <li key={i} className={'page-item' + (i + 1 === this.state.page ? ' active' : '')}>
          <a className="page-link" href="#" onClick={() => this.setPage(i + 1)}>{i + 1}</a>
        </li>
      ));

    return (
      <div>
        <h3>Albums</h3>
        <nav>
          <ul className="pagination">
            {pagination}
          </ul>
        </nav>
        <select value={this.state.items} onChange={this.handleItemsChange} className="custom-select">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
            </tr>
          </thead>
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
