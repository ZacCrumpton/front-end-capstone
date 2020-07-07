import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './AnimeCard.scss';
import animeShape from '../../../helpers/propz/animeShape';

class AnimeCard extends React.Component {
  static propTypes = {
    anime: animeShape.animeShape,
    removeAnime: PropTypes.func.isRequired,
    removeAnimeList: PropTypes.func.isRequired,
  }

  render() {
    const {
      anime,
      removeAnime,
      removeAnimeList,
      animeList,
    } = this.props;

    const textColor = {
      color: 'red',
    };
    // const { animeId } = this.props.match.params;
    const editLink = `/anime/edit/${anime.id}`;
    return (
      <div className="AnimeCard">
        <div className="card displayCard col-12 bg-dark">
          <img className="card-img-top animeImg" src={anime.imageUrl} alt={anime.title}/>
          <div className="card-body">
          <h5 className="card-title">{anime.title}</h5>
          <p className="card-text"><span style={textColor}>Genre:</span> {anime.genre}</p>
          <p className="card-text"><span style={textColor}>Episodes:</span> {anime.episodes}</p>
          <p className="card-text"><span style={textColor}>Publisher:</span> {anime.publisher}</p>
          <p className="card-text"><span style={textColor}>Main Character:</span> {anime.mainCharacter}</p>
          <p className="card-text"><span style={textColor}>Voice Actor:</span> {anime.vActors}</p>
          <button className="btn btn-danger" onClick={() => removeAnimeList(animeList.id)}>Delete</button>
          <Link className="btn btn-dark" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
        </div>
        </div>
      </div>
    );
  }
}

export default AnimeCard;
