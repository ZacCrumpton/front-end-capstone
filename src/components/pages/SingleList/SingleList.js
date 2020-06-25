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

  render() {
    const { list } = this.state;
    return (
      <div className="SingleList">
        <div className="SingleList">
          <h1>{list.title}</h1>
        </div>
      </div>
    );
  }
}

export default SingleList;
