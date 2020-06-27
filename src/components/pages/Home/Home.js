import React from 'react';

import authData from '../../../helpers/data/authData';
import animeData from '../../../helpers/data/animeData';
import AnimeCard from '../../shared/AnimeCard/AnimeCard';

import './Home.scss';

class Home extends React.Component {
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
      <AnimeCard animes={animes}/>
    ));
    return (
      <div className="Home">
        <h1>Home</h1>
        {buildAnimeCards}
      </div>
    );
  }
}

export default Home;
