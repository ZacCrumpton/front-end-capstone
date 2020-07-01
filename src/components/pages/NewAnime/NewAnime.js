import React from 'react';

import './NewAnime.scss';
import authData from '../../../helpers/data/authData';
import animeData from '../../../helpers/data/animeData';
// input fields
// build objects like json file
// axios.post to anime.json
// inside the .then use (response)
// response.data.name
// make new animelist object
// anime id is repsonse.data.name
// list id comes from params

class NewAnime extends React.Component {
  state = {
    animeTitle: '',
    animeGenre: '',
    animeEpisodes: '',
    animePublisher: '',
    animeMainCharacter: '',
    animeVA: '',
    animeImg: '',
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ animeTitle: e.target.value });
  }

  genreChange = (e) => {
    e.preventDefault();
    this.setState({ animeGenre: e.target.value });
  }

  episodesChange = (e) => {
    e.preventDefault();
    this.setState({ animeEpisodes: e.target.value });
  }

  publisherChange = (e) => {
    e.preventDefault();
    this.setState({ animePublisher: e.target.value });
  }

  mainCharacterChange = (e) => {
    e.preventDefault();
    this.setState({ animeMainCharacter: e.target.value });
  }

  voiceActorChange = (e) => {
    e.preventDefault();
    this.setState({ animeVA: e.target.value });
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ animeImg: e.target.value });
  }

  saveAnime = (e) => {
    e.preventDefault();
    const {
      animeTitle,
      animeGenre,
      animeEpisodes,
      animePublisher,
      animeMainCharacter,
      animeVA,
      animeImg,
    } = this.state;
    const newAnime = {
      title: animeTitle,
      genre: animeGenre,
      episodes: animeEpisodes,
      publisher: animePublisher,
      mainCharacter: animeMainCharacter,
      vActors: animeVA,
      imageUrl: animeImg,
      uid: authData.getUid(),
    };
    animeData.postAnime(newAnime)
      .then(() => this.props.history.push('/anime'))
      .catch((err) => console.error('unable to save anime: ', err));
  }

  render() {
    const {
      animeTitle,
      animeGenre,
      animeEpisodes,
      animePublisher,
      animeMainCharacter,
      animeVA,
      animeImg,
    } = this.state;

    return (
      <div className="NewAnime col-12">
        <h1>NewAnime</h1>
        <form className="col-6 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="anime-title">Tite</label>
            <input
              type="text"
              className="form-control"
              id="anime-title"
              value={animeTitle}
              onChange={this.titleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="anime-genre">Genre</label>
            <input
              type="text"
              className="form-control"
              id="anime-genre"
              value={animeGenre}
              onChange={this.genreChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="anime-episodes">Episodes</label>
            <input
              type="text"
              className="form-control"
              id="anime-episodes"
              value={animeEpisodes}
              onChange={this.episodesChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="anime-publisher">Publisher</label>
            <input
              type="text"
              className="form-control"
              id="anime-publisher"
              value={animePublisher}
              onChange={this.publisherChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="anime-mainCharacter">Main Character</label>
            <input
              type="text"
              className="form-control"
              id="anime-mainCharacter"
              value={animeMainCharacter}
              onChange={this.mainCharacterChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="anime-va">Voice Actor</label>
            <input
              type="text"
              className="form-control"
              id="anime-va"
              value={animeVA}
              onChange={this.voiceActorChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="anime-image">Image Url</label>
            <input
              type="text"
              className="form-control"
              id="anime-image"
              value={animeImg}
              onChange={this.imageUrlChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.saveAnime}>Save New</button>
          </form>
      </div>
    );
  }
}

export default NewAnime;
