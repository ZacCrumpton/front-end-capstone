import React from 'react';

import authData from '../../../helpers/data/authData';
import animeData from '../../../helpers/data/animeData';
import AnimeCard from '../../shared/AnimeCard/AnimeCard';

import './MyAnime.scss';

class MyAnime extends React.Component {
  state = {
    anime: [],
  }

  getAnimes = () => {
    const uid = authData.getUid();
    animeData.getAnimeByUid(uid)
      .then((anime) => this.setState({ anime }))
      .catch((err) => console.error('unable to get animes: ', err));
  }

  componentDidMount() {
    this.getAnimes();
  }

  render() {
    const { anime } = this.state;
    const buildAnimeCards = anime.map((animes) => (
      <AnimeCard key={animes.id} anime={animes}/>
    ));
    return (
      <div className="MyAnime">
        <h1>My Anime</h1>
        <div className="d-flex flex-wrap">
          {buildAnimeCards}
        </div>
      </div>
    );
  }
}

export default MyAnime;
