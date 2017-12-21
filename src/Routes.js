import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';


import Search from './components/PropertySearchPage/Search';
import Property from './components/PropertyCreatePage/Property';
import HomePage from './components/Homepage/HomePage';
import Auction from './components/Auction';
import PredictPrice from './components/Homepage/PredictPrice';



const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/property" component={ Property }/>
      <Route exact path="/search" component={ Search }/>
      <Route exact path="/predict" component={ PredictPrice }/>
      <Route exact path="/auction" component={ Auction }/>
    </div>
  </Router>
)

export default Routes;
