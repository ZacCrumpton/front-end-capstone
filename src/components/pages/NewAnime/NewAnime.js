import React from 'react';

import './NewAnime.scss';
// input fields
// build objects like json file
// axios.post to anime.json
// inside the .then use (response)
// response.data.name
// make new animelist object
// anime id is repsonse.data.name
// list id comes from params

class NewAnime extends React.Component {
  render() {
    return (
      <div className="NewAnime">
        <h1>NewAnime</h1>
      </div>
    );
  }
}

export default NewAnime;
