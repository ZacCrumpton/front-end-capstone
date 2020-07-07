import React from 'react';
import { Link } from 'react-router-dom';

import animeData from '../../../helpers/data/animeData';

import './SingleAnime.scss';
// import smash from '../../../helpers/data/smash';

class SingleAnime extends React.Component {
  state = {
    anime: {},
  }

  componentDidMount() {
    const { animeId } = this.props.match.params;
    console.error('animeId: ', animeId);
    animeData.getSingleAnime(animeId)
      .then((response) => this.setState({ anime: response.data }))
      .catch((err) => console.error('unable to get single anime: ', err));
  }

  removeAnime = () => {
    const { animeId } = this.props.match.params;
    animeData.deleteAnime(animeId)
      .then(() => this.props.history.push('/anime'))
      .catch((err) => console.error('unable to delete single anime: ', err));
  }

  render() {
    const { anime } = this.state;
    const { animeId } = this.props.match.params;
    const editLink = `/anime/edit/${animeId}`;
    return (
      <div className="SingleAnime">
        <img className="animeImg" src={anime.imageUrl} alt={anime.title}/>
        <div className="card bg-dark flex-end">
        <div className="card-body">
          <h5 className="card-title">{anime.title}</h5>
          <p className="card-text">Genre: {anime.genre}</p>
          <p className="card-text">Episodes: {anime.episodes}</p>
          <p className="card-text">Publisher: {anime.publisher}</p>
          <p className="card-text">Main Character: {anime.mainCharacter}</p>
          <p className="card-text">Voice Actor: {anime.vActor}</p>
          <button className="btn btn-danger" onClick={this.removeAnime}>Delete</button>
          <Link className="btn btn-dark" to={editLink}>Edit</Link>
        </div>
        </div>
      </div>
    );
  }
}

export default SingleAnime;
