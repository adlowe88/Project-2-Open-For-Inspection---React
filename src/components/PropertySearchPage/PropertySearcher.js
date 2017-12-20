import React, { PureComponent as Component } from 'react';

import Search from './Search';
import Results from './Results';
import MapResults from './MapResults';
import Container from './Container';
import GoogleAPI from './GoogleAPI';
import GoogleApiComponent from './GoogleApiComponent';


class PropertySearcher extends Component {
  render() {
    return (
      <div className="property-search-page">
        <Search />
        <Results />
        <MapResults />
        <Container />
        <GoogleAPI />
        <GoogleApiComponent />
      </div>
    )
  }
}

export default PropertySearcher;
