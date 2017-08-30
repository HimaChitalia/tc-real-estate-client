//node modules imports

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { StyleSheet, css } from 'aphrodite';

//custom modules imports
import Home from '../views/Home';
import Navbar from '../views/navbar'
import Location from '../views/Location';
import LocationForm from '../views/Location';
import LocationDetails from '../views/Location';
import NotFound from '../views/NotFound';


class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <div className="navbar">
            <Navbar />
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
