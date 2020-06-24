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
      <div className="ListCard">
        {list.title}
      </div>
    );
  }
}

export default ListCard;
