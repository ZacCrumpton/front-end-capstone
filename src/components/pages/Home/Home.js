import React from 'react';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const listId = 'list45665436';
    this.props.history.push(`/list/edit/${listId}`);
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <button className="btn btn-dark" onClick={this.editEvent}>Edit a List</button>
      </div>
    );
  }
}

export default Home;
