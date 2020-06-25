import React from 'react';

import './NewList.scss';

class NewList extends React.Component {
  state = {
    listTitle: '',
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ listTitle: e.target.value });
  }

  render() {
    const {
      listTitle,
    } = this.state;

    return (
      <div className="NewList">
        <h1>New List</h1>
        <form className="col-12 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="list-title">Title</label>
            <input
            type="text"
            className="form-control"
            id="list-title"
            value={listTitle}
            onChange={this.titleChange}
            />
          </div>
          <button type="submit" className="btn btn-dark">submit</button>
        </form>
      </div>
    );
  }
}

export default NewList;
