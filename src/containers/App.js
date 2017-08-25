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
import House from '../views/House';
import NotFound from '../views/NotFound';

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: '18px',
    background: '#25274D',
    padding: '6px',
  },

  navlink: {
    textDecoration: 'none',
    padding: '7px', 
    color: 'white',
    ':hover': {
      background: 'white',
      color: '#25274D'
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
                to="/house"
              >Serch information for the house</NavLink>
            </div>
          </div>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/house" component={House} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router >
    );
  }
}


export default App;
