import React from 'react';

import authData from '../../../helpers/data/authData';
import listData from '../../../helpers/data/listData';

import './NewList.scss';

class NewList extends React.Component {
  state = {
    listTitle: '',
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ listTitle: e.target.value });
  }

  saveList = (e) => {
    e.preventDefault();
    const {
      listTitle,
    } = this.state;
    const newList = {
      title: listTitle,
      uid: authData.getUid(),
    };
    listData.postList(newList)
      .then(() => this.props.history.push('/list'))
      .catch((err) => console.error('unable to save list: ', err));
  }

  render() {
    const {
      listTitle,
    } = this.state;

    return (
      <div className="NewList col-12">
        <h1>Create A New List</h1>
        <div className="card newListCard bg-dark">
        <form className="col-6 offset-3 text-left">
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
          <button type="submit" className="btn btn-dark" onClick={this.saveList}>Save List</button>
        </form>
        </div>
      </div>
    );
  }
}

export default NewList;
