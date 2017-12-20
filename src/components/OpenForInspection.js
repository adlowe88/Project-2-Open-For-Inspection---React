import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
import PredictPrice from './PredictPrice';


class OpenForInspection extends Component {
  render() {
    return (
      <div className = "homepage">
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
