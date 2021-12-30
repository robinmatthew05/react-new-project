// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import './css/LoginPage.css';
import './css/style.css';
import './css/sidebar.css';

import Auth from './components/Auth'
import Product from './components/Product';
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
          <Route path="/product">
            <Protected cmp={Product} />
          </Route>
          {/* <Route path="/category">
            <Protected cmp={Category} />
          </Route>
          <Route path="/suppliers">
            <Protected cmp={Suppliers} />
          </Route>
          <Route path="/pendingorder">
            <Protected cmp={PendingOrders} />
          </Route> */}
          <Route path="/">
            <Product />
          </Route>
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
