import React from 'react';

import animeData from '../../../helpers/data/animeData';

import './SingleAnime.scss';
// import smash from '../../../helpers/data/smash';

class SingleAnime extends React.Component {
  state = {
    anime: {
      title: '',
      genre: '',
      episodes: '',
      vActors: '',
      publisher: '',
      mainCharacter: '',
      imageUrl: '',
    },
  }

  componentDidMount() {
    const { animeId } = this.props.match.params;
    // smash.getCompleteLists(animeId)
    //   .then((response) => this.setState(anime: response.data))
    animeData.getSingleAnime(animeId)
      .then((response) => this.setState({ anime: response.data }))
      .catch((err) => console.error('unable to get single anime: ', err));
  }

  render() {
    const { anime } = this.state;
    return (
      <div className="SingleAnime">
        <div className="card">
          <img className="card-img-top" src={anime.imageUrl} alt={anime.title}/>
        <div className="card-body">
          <h5 className="card-title">{anime.title}</h5>
          <p className="card-text">Genre: {anime.genre}</p>
          <p className="card-text">Episodes: {anime.episodes}</p>
          <p className="card-text">Publisher: {anime.publisher}</p>
          <p className="card-text">Main Character: {anime.mainCharacter}</p>
          <p className="card-text">Voice Actor: {anime.vActor}</p>
        </div>
        </div>
      </div>
    );
  }
}

export default SingleAnime;
