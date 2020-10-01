import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Root, Body } from './styles';
import Nav from '../../components/NavBar';
import routes from '../../routes';
import { createPlaylistRequest, getTopArtistsRequest, getUserProfileRequest, logoutRequest, spotifyCodeRequest, spotifyTokenRequest } from '../App/actions';

interface LoginProps {
  spotifyCodeRequest: Function;
  spotifyTokenRequest: Function;
  getUserProfileRequest: Function;
  logoutRequest: Function;
  user: object;
  gettingLoginStatus: boolean;
  isLoggedIn: boolean;
  createdPlaylist: object;
}

class App extends React.Component<LoginProps, {}> {
  render() {
    return (
      <Root>
        <Router>
          <Nav
            spotifyCodeRequest={this.props.spotifyCodeRequest}
            user={this.props.user}
            gettingLoginStatus={this.props.gettingLoginStatus}
            logoutRequest={this.props.logoutRequest}
            isLoggedIn={this.props.isLoggedIn}
          />
          <Body>
            <Switch>
              {routes.map((route, i) => (
                <Route
                  path={route.path} 
                  key={i}
                  exact={route.exact}
                  render={props => <route.component {...{...props, app: this.props}}/>} />
              ))}
            </Switch>
          </Body>
        </Router>
      </Root>
    )
  }
};

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.app.isLoggedIn,
  user: state.app.user,
  gettingLoginStatus: state.app.gettingLoginStatus,
  creationRequest: state.app.creationRequest,
  topArtists: state.app.topArtists,
  createdPlaylist: state.app.createdPlaylist,
})

const mapDispatchToProps = (dispatch: any) => ({
  spotifyCodeRequest: () => {
    console.log("spotifyCodeRequest is connected to App");
    dispatch(spotifyCodeRequest());
  },
  spotifyTokenRequest: (data:any) => {
    console.log("spotifyTokenRequest is connected to App");
    dispatch(spotifyTokenRequest(data));
  },
  getUserProfileRequest: () => {
    console.log("getUserProfileRequest is connected to App");
    dispatch(getUserProfileRequest());
  },
  logoutRequest: () => {
    console.log("logoutRequest is connected to App");
    dispatch(logoutRequest());
  },
  createPlaylistRequest: (data:any) => {
    console.log("createPlaylistRequest is connected to App");
    dispatch(createPlaylistRequest(data));
  },
  getTopArtistsRequest: () => {
    console.log("getTopArtistsRequest is connected to App");
    dispatch(getTopArtistsRequest());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
