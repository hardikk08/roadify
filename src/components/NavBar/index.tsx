import React from 'react';
import { Header, Content, Title, NavLinks, Spacer, User, ProfilePicture, Dropdown, DropdownContent } from './styles';
import Login from '../Login';
import Loader from '../Loader';

interface NavProps {
  spotifyCodeRequest: Function;
  logoutRequest: Function;
  user?: any;
  gettingLoginStatus: boolean;
  isLoggedIn: boolean;
}

interface NavState {
  openMenu: boolean
}

class Nav extends React.Component<NavProps, NavState> {
  constructor(props: any) {
    super(props);
    this.state = {
      openMenu: false
    };
  };

  logout = () => {
    this.props.logoutRequest();
  }

  render() {
    const { props: { user, gettingLoginStatus, spotifyCodeRequest }, state: { openMenu }, logout } = this;
    return (
      <div>
        <Header>
          <Content>
            <Title>
              <i className="fas fa-car" style={{margin: `${5}px`}}></i> Tripify
            </Title>
            <NavLinks>
              { !gettingLoginStatus ? 
                  Object.entries(user).length > 0 ?
                    <User>
                      <ProfilePicture width="40" height="40" src={user.images[0].url} alt="user_image"/>
                      <Dropdown onClick={()=>this.setState({openMenu: !openMenu})}>{user.display_name}
                      { openMenu ?
                          <DropdownContent>
                            <div onClick={()=>logout()}>Logout</div>
                          </DropdownContent>
                        : null
                      }
                      </Dropdown>
                    </User>
                  : <Login spotifyCodeRequest={spotifyCodeRequest}/>
                : <Loader />
              }
            </NavLinks>
          </Content>
        </Header>
        <Spacer />
      </div>
    )
  }
}

export default Nav;