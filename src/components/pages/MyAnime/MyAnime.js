import React from 'react';

import { Link } from 'react-router-dom';

import authData from '../../../helpers/data/authData';
import animeData from '../../../helpers/data/animeData';
import AnimeCard from '../../shared/AnimeCard/AnimeCard';
import smash from '../../../helpers/data/smash';

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

  removeAnime = (animeId) => {
    animeData.deleteAnime(animeId)
      .then(() => this.getAnimes())
      .catch((err) => console.error('unable to delete anime: ', err));
  }

  removeAnimeList = (animeId) => {
    smash.completelyRemoveAnime(animeId)
      .then(() => this.getAnimes())
      .catch((err) => console.error('unable to delete single anime: ', err));
  }

  render() {
    const { anime } = this.state;
    const buildAnimeCards = anime.map((animes) => (
      <AnimeCard key={animes.id} anime={animes} removeAnime={this.removeAnime} removeAnimeList={this.removeAnimeList}/>
    ));
    return (
      <div className="MyAnime">
        <Link className="btn btn-dark addAnimeBtn" to='/anime/new'>Add Anime</Link>
        <div className="d-flex flex-wrap justify-content-around">
          {buildAnimeCards}
        </div>
      </div>
    );
  }
}

export default MyAnime;
