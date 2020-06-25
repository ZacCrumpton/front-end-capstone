import React from 'react';

import listShape from '../../../helpers/propz/listShape';

import './ListCard.scss';

class ListCard extends React.Component {
  static propTypes = {
    list: listShape.listShape,
  }

  render() {
    const { list } = this.props;
    return (
      <div className="ListCard col-4">
        <div className="card">
          <div className="card-body">
    <h6 className="card-title">{list.title}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCard;
