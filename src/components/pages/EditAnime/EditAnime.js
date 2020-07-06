import React from 'react';

import './EditAnime.scss';
import animeData from '../../../helpers/data/animeData';
import authData from '../../../helpers/data/authData';

class EditAnime extends React.Component {
  state = {
    animeTitle: '',
    animeGenre: '',
    animeEpisodes: '',
    animePublisher: '',
    animeMainCharacter: '',
    animeVA: '',
    animeImg: '',
  }

  componentDidMount() {
    const editId = this.props.match.params.animeId;
    animeData.getSingleAnime(editId)
      .then((response) => {
        const anime = response.data;
        this.setState({
          animeTitle: anime.title,
          animeGenre: anime.genre,
          animeEpisodes: anime.episodes,
          animePublisher: anime.publisher,
          animeMainCharacter: anime.mainCharacter,
          animeVa: anime.vActors,
          animeImg: anime.imageUrl,
        });
      })
      .catch((err) => console.error('unable to get anime to edit: ', err));
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

  updateAnime = (e) => {
    e.preventDefault();
    const { animeId } = this.props.match.params;
    const {
      animeTitle,
      animeGenre,
      animeEpisodes,
      animePublisher,
      animeMainCharacter,
      animeVA,
      animeImg,
    } = this.state;
    const updatedAnime = {
      title: animeTitle,
      genre: animeGenre,
      episodes: animeEpisodes,
      publisher: animePublisher,
      mainCharacter: animeMainCharacter,
      vActors: animeVA,
      imageUrl: animeImg,
      uid: authData.getUid(),
    };
    animeData.putAnime(animeId, updatedAnime)
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
      <div className="EditAnime">
        <h1>EditAnime</h1>
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
          <button type="submit" className="btn btn-primary" onClick={this.updateAnime}>Save New</button>
          </form>
      </div>
    );
  }
}

export default EditAnime;
