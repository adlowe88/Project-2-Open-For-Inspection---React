import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';


import Search from './components/PropertySearchPage/Search';
import Property from './components/PropertyCreatePage/Property';
import HomePage from './components/Homepage/HomePage';
import Auction from './components/Auction';
import PredictPrice from './components/Homepage/PredictPrice';

import Layout from './components/Layout';
import ChatRoom from './ChatRoom';




const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/property" component={ Property }/>
      <Route exact path="/search" component={ Search }/>
      <Route exact path="/predict" component={ PredictPrice }/>
      <Route exact path="/auction" component={ Auction }/>

      <Route exact path="/jose/" render={props => <ChatRoom user_name="jose" {...props} />} />
      <Route exact path="/damian/" render={props => <ChatRoom user_name="damian" {...props} />} />
      <Route exact path="/bing/" render={props => <ChatRoom user_name="bing" {...props} />} />
      <Route exact path="/jose/chat" render={props => <Layout user_name="jose" {...props} />} />
      <Route exact path="/damian/chat" render={props => <Layout user_name="damian" {...props} />} />
      <Route exact path="/bing/chat" render={props => <Layout user_name="bing" {...props} />} />
    </div>
  </Router>
)

export default Routes;
