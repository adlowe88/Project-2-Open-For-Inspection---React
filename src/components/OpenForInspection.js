import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

class OpenForInspection extends Component {
  render() {
    return (
      <div>
      <h1><Link to="/">OpenForInspection</Link></h1>
      <p>Property</p>
      <p>Search</p>
      </div>
    );
  }
}

export default OpenForInspection;
