import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import OpenForInspection from './components/Homepage/OpenForInspection';
import Property from './components/PropertyCreate/Property';
import Search from './components/PropertySearch/Search';
import Results from './components/PropertySearch/Results';
import PredictPrice from './components/PredictPrice';

import PropertySearch from '/components/PropertySearch';
import PropertyCreate from '/components/PropertyCreate';


const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ OpenForInspection }/>
      <Route exact path="/property" component={ PropertyCreate }/>
      <Route exact path="/search" component={ PropertySearch }/>
    </div>
  </Router>
)

export default Routes;
