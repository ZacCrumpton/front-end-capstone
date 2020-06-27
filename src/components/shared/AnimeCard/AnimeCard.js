import React from 'react';

import './AnimeCard.scss';

class AnimeCard extends React.Component {
  render() {
    const { animes } = this.props;
    return (
      <div className="AnimeCard">
        {animes.title}
      </div>
    );
  }
}

export default AnimeCard;
