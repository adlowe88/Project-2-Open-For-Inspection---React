import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
import PredictPrice from './PredictPrice';


class OpenForInspection extends Component {
  render() {
    return (
      <div className = "homepage">
        <nav className="fixednav">
          <div className="leftnav">logo</div>

          <div className="rightnav">home</div>

          <div className="rightnav">login</div>

        </nav>
        <div className = "search-div">
          <PredictPrice/>
          <h3><Link to="/property">Property</Link></h3>
          <h3><Link to="/search">Search</Link></h3>
        </div>
      </div>
    );
  }
}

export default OpenForInspection;
