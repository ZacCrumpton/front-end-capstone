import React from 'react';

import './SingleList.scss';
import listData from '../../../helpers/data/listData';

class SingleList extends React.Component {
  state = {
    list: {},
  }

  componentDidMount() {
    const { listId } = this.props.match.params;
    listData.getSingleList(listId)
      .then((response) => this.setState({ list: response.data }))
      .catch((err) => console.error('unable to get sinlge list: ', err));
  }

  removeList = () => {
    const { listId } = this.props.match.params;
    listData.deleteList(listId)
      .then(() => this.props.history.push('/list'))
      .catch((err) => console.error('unable to delete list: ', err));
  }

  render() {
    const { list } = this.state;
    return (
      <div className="SingleList">
        <div className="SingleList">
          <button className="btn btn-danger" onClick={this.removeList}>Delete</button>
          <h1>{list.title}</h1>
        </div>
      </div>
    );
  }
}

export default SingleList;
