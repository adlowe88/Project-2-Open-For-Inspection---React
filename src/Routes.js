import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import OpenForInspection from './components/OpenForInspection';
import Property from './components/Property';
import Search from './components/Search';
import Results from './components/Results';
import ProdictPrice from './components/PredictPrice';
import Auction from './components/Auction';


const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ OpenForInspection }/>
      <Route exact path="/property" component={ Property }/>
      <Route exact path="/search" component={ Search }/>
      <Route exact path="/predict" component={ ProdictPrice }/>
      <Route exact path="/auction" component={ Auction }/>
    </div>
  </Router>
)

export default Routes;
