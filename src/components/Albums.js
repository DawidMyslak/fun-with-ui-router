import React, { Component, PropTypes } from 'react';

export default class Albums extends Component {
  constructor() {
    super();
    this.state = { page: 1 };
    this.setPage = this.setPage.bind(this);
    this.handleItemsChange = this.handleItemsChange.bind(this);
  }

  componentDidMount() {
    let total = this.props.resolves.albums.length;
    let items = localStorage.getItem('items') || 10;
    let pages = Math.ceil(total / items);
    this.setState({ total, items, pages });
  }

  setPage(page) {
    this.setState({ page });
  }

  handleItemsChange(event) {
    let items = parseInt(event.target.value, 10);
    localStorage.setItem('items', items);
    let pages = Math.ceil(this.state.total / items);
    this.setState({ page: 1, items, pages });
  }

  render() {
    let { albums } = this.props.resolves;

    if (albums.err) {
      return (<div className="alert alert-danger">{albums.err.message}</div>);
    }

    let { page, items, pages } = this.state;

    let pagination = Array(pages)
      .fill()
      .map((_, i) => (
        <li key={i} className={'page-item' + (i + 1 === this.state.page ? ' active' : '')}>
          <a className="page-link" href="#" onClick={() => this.setPage(i + 1)}>{i + 1}</a>
        </li>
      ));

    let rows = albums
      .filter(album => album.id > (page - 1) * items && album.id <= page * items)
      .map(album => (
        <tr key={album.id}>
          <td>
            {album.id}
          </td>
          <td>
            {album.title}
          </td>
        </tr>
      ));

    return (
      <div className="albums">
        <h3>Albums</h3>
        <div className="row">
          <div className="col-8">
            <ul className="pagination">
              {pagination}
            </ul>
          </div>
          <div className="col-4 text-right">
            <select value={this.state.items} onChange={this.handleItemsChange} className="custom-select">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
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
