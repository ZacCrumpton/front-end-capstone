import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import EditList from '../components/pages/EditList/EditList';
import Home from '../components/pages/Home/Home';
import NewList from '../components/pages/NewList/NewList';
import SingleList from '../components/pages/SingleList/SingleList';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <h1>Konichiwa Anime</h1>
        <Auth />
        <EditList />
        <Home />
        <NewList />
        <SingleList />
      </div>
    );
  }
}

export default App;
