import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import OpenForInspection from './components/OpenForInspection';
import Property from './components/Property';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ OpenForInspection }/>
    </div>
  </Router>
)

export default Routes;
