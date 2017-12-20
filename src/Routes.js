import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import PropertySearcher from './components/PropertySearchPage/PropertySearcher';
import Property from './components/PropertyCreatePage/Property';
import HomePage from './components/Homepage/HomePage';


const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/property" component={ Property }/>
      <Route exact path="/search" component={ PropertySearcher }/>
    </div>
  </Router>
)

export default Routes;
