import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

class OpenForInspection extends Component {
  render() {
    return (
      <div>
      <h1><Link to="/">OpenForInspection</Link></h1>
      <h3><Link to="/property">Property</Link></h3>
      <h3><Link to="/search">Search</Link></h3>
      </div>
    );
  }
}

export default OpenForInspection;
