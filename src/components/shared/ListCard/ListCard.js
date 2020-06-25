import React from 'react';
import { Link } from 'react-router-dom';

import listShape from '../../../helpers/propz/listShape';

import './ListCard.scss';

class ListCard extends React.Component {
  static propTypes = {
    list: listShape.listShape,
  }

  render() {
    const { list } = this.props;
    const editLink = `/list/edit/${list.id}`;
    return (
      <div className="ListCard col-4">
        <div className="card">
          <div className="card-body">
            <h6 className="card-title">{list.title}</h6>
            <Link className="btn btn-dark" to={editLink}>Edit</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCard;
