import React from 'react';

import { Link } from 'react-router-dom';

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
        <Link to='/list'>My Lists</Link>
        <Link to='/list/65436543'>Single List</Link>
        <Link to='/list/new'>New List</Link>

      </div>
    );
  }
}

export default Home;
