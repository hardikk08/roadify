import React from 'react';
import { Redirect } from 'react-router-dom';

interface LoggingInProps {
  app ?: any; 
}

interface LoggingInState {
  code: string;
  state: string;
  success: boolean;
}

class LoggingIn extends React.Component<LoggingInProps, LoggingInState> {
  constructor(props: any) {
    super(props);
    this.state = {
      code: '',
      state: '',
      success: false
    };
  }
  componentDidMount() {
    const {code, state} = this.getUrlParams();
    this.setState({ ...this.state, code, state }, () => (
      this.props.app.spotifyTokenRequest({
        code: this.state.code,
        state: this.state.state,
      })
    ));
  }
  // Get code & state from url
  getUrlParams = () => {
    const code = this.getQueryStringValue('code');
    const state = this.getQueryStringValue('state');
    return { code, state }
  }
  // searches for param
  getQueryStringValue = (key:string) => {  
    // eslint-disable-next-line no-useless-escape
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
  };

  render() {
    const isLoggedIn = this.props.app.isLoggedIn;
    return (
      <div>
        {isLoggedIn ? <Redirect push to={'/dashboard'} /> : <div>Hold on, logging you in...</div>}
      </div>
    )
  }
};

export default LoggingIn;