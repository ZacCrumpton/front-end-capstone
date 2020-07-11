import React from 'react';

import authData from '../../../helpers/data/authData';
import listData from '../../../helpers/data/listData';
import smash from '../../../helpers/data/smash';
import ListCard from '../../shared/ListCard/ListCard';
import imagePath4 from '../../../images/kitsune.png';

import './MyLists.scss';
import animeData from '../../../helpers/data/animeData';

class MyLists extends React.Component {
  state = {
    list: [],
    animeList: [],
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

  // function = grabs e.target.value on click of drop down
  // grabs anime id
  // to get list id, this.props.list.id

  grabAnimesAndListId = (e) => {
    const animeListId = e.target.value;
    const listId = this.props.list.id;
  }

  render() {
    const textColor = {
      color: 'red',
    };
    const { list } = this.state;
    const buildListCards = list.map((lists) => (
      <ListCard key={lists.id} list={lists} removeList={this.removeList} removeAnimeList={this.removeAnimeList}/>
    ));

    return (
      <div className="MyLists">
        <div className="d-flex flex-wrap">
          <div className="listBanner bg-dark row justify-content-center">
            <h1 className="listH3">My</h1>
            <img className="banner1" src={imagePath4}/>
            <h1 className="listH3"><span style={textColor}>List</span></h1>
          </div>
          {buildListCards}
        </div>
      </div>
    );
  }
}

export default MyLists;
