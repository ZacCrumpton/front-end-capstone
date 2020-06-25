import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import listShape from '../../../helpers/propz/listShape';

import './ListCard.scss';

class ListCard extends React.Component {
  static propTypes = {
    list: listShape.listShape,
    removeList: PropTypes.func.isRequired,
  }

  render() {
    const { list, removeList } = this.props;
    const editLink = `/list/edit/${list.id}`;
    const singleLink = `/list/${list.id}`;
    return (
      <div className="ListCard col-4">
        <Link className="card" to={singleLink}>
          <div className="card-body">
            <h6 className="card-title">{list.title}</h6>
            <Link className="btn btn-dark" to={editLink}>Edit</Link>
            <button className="btn btn-danger" onClick={() => removeList(list.id)}>Delete</button>
          </div>
        </Link>
      </div>
    );
  }
}

export default ListCard;
