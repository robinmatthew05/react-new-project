// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import './css/LoginPage.css';
import './css/style.css';
import './css/sidebar.css';

import Auth from './components/Auth'
import Dashboard from './components/Dashboard';
import Volunteer from './components/Volunteer';
import Donations from './components/Donations';
import AdsandPartners from './components/AdsandPartners';
import Protected from './components/Protected'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      {/* <Navbar /> */}

      <Router>
        <Switch>
          <Route path="/dashboard">
            <Protected cmp={Dashboard} />
          </Route>
          <Route path="/volunteer">
            <Protected cmp={Volunteer} />
          </Route>
          <Route path="/donations">
            <Protected cmp={Donations} />
          </Route>
          <Route path="/adspartners">
            <Protected cmp={AdsandPartners} />
          </Route>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
