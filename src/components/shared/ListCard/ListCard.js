import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Dropdown from 'react-dropdown';
// import { Button } from 'reactstrap';
// import { ButtonGroup } from 'react-bootstrap';

import listShape from '../../../helpers/propz/listShape';

import './ListCard.scss';

// function = grabs e.target.value on click of drop down
// grabs anime id
// to get list id, this.props.list.id

class ListCard extends React.Component {
  static propTypes = {
    list: listShape.listShape,
    removeList: PropTypes.func.isRequired,
  }

  render() {
    const { list, anime, removeList } = this.props;
    const editLink = `/list/edit/${list.id}`;
    const buildAnimeList = list.anime.map((l) => <div key={l.id} className="animeItems"><b className="bold">Title:</b> { l.title } <b className="bold">Genre:</b> { l.genre } <b className="bold">Episodes:</b> { l.episodes } <Link className="btn btn-dark animeSingleViewButton" to={`/anime/${l.id}`}><i className="fas fa-eye"></i></Link> </div>);
    return (
      <div className="ListCard col-4">
        <div className="card w-300 bg-dark">
          <div className="card-body">
            <div className="listTop"><h4 className="card-title">{list.title}</h4>
            <button className="btn btn-danger addAnimeBtn"><i className="fas fa-plus-square"></i>
            </button>
            </div>
            {buildAnimeList}
            <Link className="btn btn-dark" to={editLink}>Edit</Link>
            <button className="btn btn-danger" onClick={() => removeList(list.id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCard;
