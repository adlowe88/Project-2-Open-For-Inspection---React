import React, { PureComponent as Component } from 'react';
import Login from './Login';
import OpenForInspection from './OpenForInspection';
import About from './About';
import Footer from './Footer';

import PreditPrice from './PredictPrice';

import Property from '../PropertyCreatePage/Property';



class HomePage extends Component {
  render() {
    const style = { backgroundImage: 'https://i.imgur.com/2nLpELR.jpg' };
    return (
      <div className="home-page t2">
        <Login />
        <OpenForInspection />
        <About />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
