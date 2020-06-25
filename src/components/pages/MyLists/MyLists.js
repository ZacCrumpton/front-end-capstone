import React from 'react';

import authData from '../../../helpers/data/authData';
import listData from '../../../helpers/data/listData';
import ListCard from '../../shared/ListCard/ListCard';

import './MyLists.scss';

class MyLists extends React.Component {
  state = {
    list: [],
  }

  getLists = () => {
    const uid = authData.getUid();
    listData.getListsByUid(uid)
      .then((list) => this.setState({ list }))
      .catch((err) => console.error('unable to get lists: ', err));
  }

  componentDidMount() {
    this.getLists();
  }

  render() {
    const { list } = this.state;
    const buildListCards = list.map((lists) => (
      <ListCard key={lists.id} list={lists}/>
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
