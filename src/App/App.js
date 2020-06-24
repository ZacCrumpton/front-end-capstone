import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.scss';

import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import EditList from '../components/pages/EditList/EditList';
import Home from '../components/pages/Home/Home';
import NewList from '../components/pages/NewList/NewList';
import SingleList from '../components/pages/SingleList/SingleList';
import MyLists from '../components/pages/MyLists/MyLists';

import fbConnection from '../helpers/data/connection';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to ={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

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
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed}/>
            <div className="container">
              <div className="row">
              <Switch>
                <PrivateRoute path='/home' component={Home} authed={authed} />
                <PrivateRoute path='/list/edit/:listId' component={EditList} authed={authed} />
                <PrivateRoute path='/list/new' component={NewList} authed={authed} />
                <PrivateRoute path='/list/:listId' component={SingleList} authed={authed} />
                <PrivateRoute path='/list' component={MyLists} authed={authed} />
                {/* <PrivateRoute path='/anime/edit/:animeId' component={EditAnime} authed={authed} />
                <PrivateRoute path='/anime/new' component={NewAnimeForm} authed={authed} />
                <PrivateRoute path='/anime/:animeId' component={SingleAnime} authed={authed} /> */}
                <PublicRoute path='/auth' component={Auth} authed={authed} />
                <Redirect from="*" to="/home"/>
            </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
