import React from 'react';

import authData from '../../../helpers/data/authData';
import animeData from '../../../helpers/data/animeData';
import animeListData from '../../../helpers/data/animeListData';
import AnimeCard from '../../shared/AnimeCard/AnimeCard';
import AnimeListCard from '../../shared/AnimeListCard/AnimeListCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    anime: [],
    animeList: [],
  }

  getAnimes = () => {
    const uid = authData.getUid();
    animeData.getAnimeByUid(uid)
      .then((anime) => this.setState({ anime }))
      .catch((err) => console.error('unable to get animes: ', err));
  }

  getAnimeLists = () => {
    animeListData.getAllAnimeLists()
      .then((animeList) => this.setState({ animeList }))
      .catch((err) => console.error('unable to get animeLists: ', err));
  }

  componentDidMount() {
    this.getAnimes();
    this.getAnimeLists();
  }

  render() {
    // const { anime, animeList } = this.state;
    // const buildAnimeListCards = animeList.map((animeLists) => (
    //   <AnimeListCard animelists={animeLists}/>
    // ));
    // const buildAnimeCards = anime.map((animes) => (
    //   <AnimeCard animes={animes}/>
    // ));
    return (
      <div className="Home">
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
