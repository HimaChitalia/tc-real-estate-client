//node modules imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//custom modules imports
import Home from './Home';
import Navbar from './navbar'
import Footer from './footer';
import LocationForm from './Location/locationForm';
import SendContactInfo from './Contact/contactForm';
import LocationDetails from './Location/locationDetails';
import Properties from './Properties'
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
            <Route exact path="/contact" component={SendContactInfo} />
            <Route exact path="/locationDetails" component={LocationDetails} />
            <Route exact path="/properties" component={Properties} />
            <Route component={NotFound} />
          </Switch>

          <div className='footer'>
            <Footer />
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
