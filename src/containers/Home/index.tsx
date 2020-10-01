import React from 'react';
import { Redirect } from 'react-router-dom';
import { HomeContainer, HeroHeader, HeroSubHeader, HeaderOne, HeaderTwo } from './styles';

interface LoggingInProps {
  app ?: any; 
}

class Home extends React.Component<LoggingInProps, {}> {
  componentDidMount() {
    if ( Object.entries(this.props.app.user).length <= 0) {
      this.props.app.getUserProfileRequest();
    };
  }
  render() {
    const isLoggedIn = this.props.app.isLoggedIn;
    return (
      <HomeContainer>
        { isLoggedIn ? <Redirect push to={'/dashboard'} /> : null }
        <HeroHeader>
          <HeaderOne>
            WE LOVE MUSIC
          </HeaderOne>
          <HeaderTwo>
            AND TRAVELING
          </HeaderTwo>
        </HeroHeader>
        <HeroSubHeader>
          Login with spotify<i style={{margin: `5px`}} className="fa fa-spotify" aria-hidden="true"></i>
          & let us create your trip playlist to have the best music experience!
        </HeroSubHeader>
      </HomeContainer>
    )
  }
}

export default Home