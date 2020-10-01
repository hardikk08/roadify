import React from 'react';
import { Button } from './styles';

interface LoginProps{
  spotifyCodeRequest: Function;
}

class Login extends React.Component<LoginProps, {}> {
  connect = () => {
    this.props.spotifyCodeRequest();
  }

  render() {
    const { connect } = this;
    return (
      <Button onClick={() => connect()}>
        <i style={{margin: `10px`}} className="fa fa-2x fa-spotify" aria-hidden="true"></i> Login
      </Button>
    )
  }
};

export default Login;