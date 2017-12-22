import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
import PredictPrice from './PredictPrice';
import image from './image.png';


class OpenForInspection extends Component {
  render() {

    const style = {
      border: '0.5px solid black',
      width: '33%',
      display: 'inline-flex',
      position: 'absolute',
      top: '29.3%',
      left: '20%',
      height: '55%',
      backgroundColor: 'white',
      opacity: '0.8',
      borderRadius: '8px',
      color: 'black',
    }

    const style2 = {
      textAlign: 'center',
      margin: '8% auto',
    }

    return (
      <div>
        <nav className="fixednav">
          <div className="leftnav">
          <Link to="/"><img src="https://i.imgur.com/DwQZHkO.png" alt="logo" className = "logo" /></Link>
          </div>
        </nav>

        <div style = { style } className = "search-div" >
          <div style = { style2 } className = "inner-div">
            <button className = "add-button"><Link to="/property">Add Property</Link></button>
            <button className = "search-button"><Link to="/search">Search</Link></button>
            <PredictPrice/>
          </div>
        </div>

      </div>
    );
  }
}

export default OpenForInspection;


// <div className="rightnav">login</div>
//
// <div className="rightnav">sign up</div>
