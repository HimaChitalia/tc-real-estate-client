//node modules imports

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

//custom modules imports
import Home from '../views/Home';
// import House from '../views/House';
// import HouseForm from '../views/House';
import Location from '../views/Location';
import LocationForm from '../views/Location';
import LocationDetails from '../views/Location';
// import Signup from '../views/Signup';
import NotFound from '../views/NotFound';

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    background: '#18121e',
    padding: '6px',
  },

  navlin000000k: {
    textDecoration: 'none',
    padding: '6px',
    color: 'white',
    ':hover': {
      background: '#fff',
      color: '#18121e'
    }
  }
})

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <div className="navbar">
            <div className={css(styles.navbar)}>
              <NavLink
                className={css(styles.navlink)}
                to="/"
              >Home</NavLink>
              <NavLink
                className={css(styles.navlink)}
                to="/location"
              > Location Information </NavLink>
              <NavLink
                className={css(styles.navlink)}
                to="/locationDetails"
              > Location Information </NavLink>
          </div>
          </div>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/locations/create" component={LocationForm} />
            <Route exact path="/locationDetails" component={LocationDetails} />
            <Route exact path="/location" component={Location} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router >
    );
  }
}


export default App;
