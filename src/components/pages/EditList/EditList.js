import React from 'react';

import listData from '../../../helpers/data/listData';
import authData from '../../../helpers/data/authData';

import './EditList.scss';

class EditList extends React.Component {
  state = {
    listTitle: '',
  }

  componentDidMount() {
    const editId = this.props.match.params.listId;
    listData.getSingleList(editId)
      .then((response) => {
        const list = response.data;
        this.setState({
          listTitle: list.title,
        });
      })
      .catch((err) => console.error('unable to get list to edit: ', err));
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ listTitle: e.target.value });
  }

  updateList = (e) => {
    e.preventDefault();
    const { listId } = this.props.match.params;
    const {
      listTitle,
    } = this.state;
    const updatedList = {
      title: listTitle,
      uid: authData.getUid(),
    };
    listData.putList(listId, updatedList)
      .then(() => this.props.history.push('/list'))
      .catch((err) => console.error('unable to save list: ', err));
  }

  render() {
    const {
      listTitle,
    } = this.state;
    return (
      <div className="EditList">
        <h1>Edit List</h1>
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
          <button type="submit" className="btn btn-dark" onClick={this.updateList}>Save List</button>
        </form>
      </div>
    );
  }
}

export default EditList;
