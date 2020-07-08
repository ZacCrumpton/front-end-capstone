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
    const buildAnimeList = list.anime.map((l) => <div key={l.id} className="animeItems"><b className="bold">Title:</b> { l.title } <b className="bold">Genre:</b> { l.genre } <b className="bold">Episodes:</b> { l.episodes } <Link className="btn btn-dark animeSingleViewButton" to={`/anime/${l.id}`}><i className="fas fa-eye"></i></Link> </div>);
    return (
      <div className="ListCard col-4">
        <div className="card w-300 bg-dark">
          <div className="card-body">
            <div className="listTop"><h6 className="card-title">{list.title}</h6>
              <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            <Link className="btn btn-danger addAnimeBtn" to={`/list/${list.id}/anime/new`}><i className="fas fa-plus-square"></i></Link></div>
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
