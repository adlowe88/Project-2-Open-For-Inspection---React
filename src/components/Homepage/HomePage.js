import React, { PureComponent as Component } from 'react';
import Login from './Login';
import OpenForInspection from './OpenForInspection';
import About from './About';
import Footer from './Footer';
<<<<<<< HEAD
import PreditPrice from './PredictPrice';
=======
import Property from '../PropertyCreatePage/Property';

>>>>>>> 8c61d5c99bdf40f09ef589421c9bb4acdaeada3e

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
