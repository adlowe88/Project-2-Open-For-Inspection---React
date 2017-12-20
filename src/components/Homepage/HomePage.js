import React, { PureComponent as Component } from 'react';
import Login from './Login';
import OpenForInspection from './OpenForInspection';
import About from './About';
import Footer from './Footer';

class HomePage extends Component {
  render() {
    return (
      <Login />
      <OpenForInspection />
      <About />
      <Footer />
    );
  }
}

export default HomePage;
