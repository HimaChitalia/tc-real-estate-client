//node modules imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//custom modules imports
import Home from './Home';
import Navbar from './navbar'
import LocationForm from './Location/locationForm';
import LocationDetails from './Location/locationDetails';
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
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
