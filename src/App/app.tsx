import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Root, Body } from './styles';
import Nav from '../NavBar';
import routes from '../routes';

function App() {
  return (
    <Router>
      <Root>
      <Nav />
      <Body>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Body>
      </Root>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;
