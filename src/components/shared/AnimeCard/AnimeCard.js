import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './AnimeCard.scss';
import animeShape from '../../../helpers/propz/animeShape';

class AnimeCard extends React.Component {
  static propTypes = {
    anime: animeShape.animeShape,
  }

  render() {
    const { anime } = this.props;
    return (
      <div className="AnimeCard">
        <div className="card">
          <img className="card-img-top" src={anime.imageUrl} alt={anime.title}/>
          <div className="card-body">
          <h5 className="card-title">{anime.title}</h5>
          <p className="card-text">Genre: {anime.genre}</p>
          <p className="card-text">Episodes: {anime.episodes}</p>
          <p className="card-text">Publisher: {anime.publisher}</p>
          <p className="card-text">Main Character: {anime.mainCharacter}</p>
          <p className="card-text">Voice Actor: {anime.vActors}</p>
        </div>
        </div>
      </div>
    );
  }
}

export default AnimeCard;
