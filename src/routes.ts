import Home from './containers/Home';
import LoggingIn from './containers/LoggingIn';
import Dashboard from './containers/Dashboard';

const routes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home
  },
  {
    name: "Callback",
    path: "/callback",
    component: LoggingIn
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: Dashboard
  }
];

export default routes;