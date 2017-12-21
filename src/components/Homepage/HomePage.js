import React, { PureComponent as Component } from 'react';
import OpenForInspection from './OpenForInspection';
import About from './About';
import Footer from './Footer';

import PreditPrice from './PredictPrice';

import Property from '../PropertyCreatePage/Property';


import SignupForm from '../../SignupForm';
import {Link} from 'react-router-dom';



class HomePage extends Component {
  render() {
    const style = { backgroundImage: 'https://i.imgur.com/2nLpELR.jpg' };
    return (
      <div className="home-page t2">
        <SignupForm />
        <OpenForInspection />
        <About />
        <Footer />
        <iframe allowvr="true" src="https://adlowe88.github.io/Nora-VR/Nora-VR/vr/" width="600" height="400" />
      </div>
    );
  }
}

export default HomePage;

// <iframe allowvr src="https://adlowe88.github.io/Nora-VR/Nora-VR/vr/" width="600" height="400" />
