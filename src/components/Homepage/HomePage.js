import React, { PureComponent as Component } from 'react';
import Login from './Login';
import OpenForInspection from './OpenForInspection';
import About from './About';
import Footer from './Footer';

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Login />
        <OpenForInspection />
        <About />
        <Footer />
        </div>
    );
  }
}

export default HomePage;
