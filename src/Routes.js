import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

<<<<<<< HEAD
import OpenForInspection from './components/OpenForInspection';
import Property from './components/Property';
import Search from './components/Search';
import Results from './components/Results';
import ProdictPrice from './components/PredictPrice';
import Auction from './components/Auction';
=======
import Search from './components/PropertySearchPage/Search';
import Property from './components/PropertyCreatePage/Property';
import HomePage from './components/Homepage/HomePage';
>>>>>>> db4960660bf85d9fcd2e411b6822c32d0f25cc6b


const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/property" component={ Property }/>
      <Route exact path="/search" component={ Search }/>
      <Route exact path="/predict" component={ ProdictPrice }/>
      <Route exact path="/auction" component={ Auction }/>
    </div>
  </Router>
)

export default Routes;
