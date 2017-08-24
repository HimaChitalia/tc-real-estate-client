import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    background: '#18121e',
    padding: '6px',
  },

  navlink: {
    textDecoration: 'none',
    padding: '6px', 
    color: 'white',
    ':hover': {
      background: '#fff',
      color: '#18121e'
    }
  }
})

const Signup = () => <form className="signup_form"></form>
const Home = () => <div> <br/ > <h1>Home Page</h1> </div>
const NotFound = () => <div>NotFound</div>

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
                to="/signup"
              >Signup</NavLink>
            </div>
          </div>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router >
    );
  }
}


export default App;
