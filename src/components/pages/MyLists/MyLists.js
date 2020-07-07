import React from 'react';

import authData from '../../../helpers/data/authData';
import listData from '../../../helpers/data/listData';
import smash from '../../../helpers/data/smash';
import ListCard from '../../shared/ListCard/ListCard';

import './MyLists.scss';
import animeData from '../../../helpers/data/animeData';

class MyLists extends React.Component {
  state = {
    list: [],
  }

  getLists = () => {
    const uid = authData.getUid();
    smash.getCompleteLists(uid)
      .then((list) => this.setState({ list }))
      .catch((err) => console.error('unable to get lists: ', err));
  }

  // getSingleAnime = () => {
  //   animeData.getSinlgeAnime(uid)
  //     .then()
  //     .catch();
  // }

  componentDidMount() {
    this.getLists();
  }

  removeList = (listId) => {
    listData.deleteList(listId)
      .then(() => this.getLists())
      .catch((err) => console.error('unable to delete list: ', err));
  }

  removeAnimeList = (animeListId) => {
    smash.completelyRemoveAnime(animeListId)
      .then(() => animeData.getSingleAnime())
      .catch((err) => console.error('unable to delete anime and animelist: ', err));
  }

  render() {
    const { list } = this.state;
    const buildListCards = list.map((lists) => (
      <ListCard key={lists.id} list={lists} removeList={this.removeList} removeAnimeList={this.removeAnimeList}/>
    ));

    return (
      <div className="MyLists">
        <div className="d-flex flex-wrap">
          {buildListCards}
        </div>
      </div>
    );
  }
}

export default MyLists;
