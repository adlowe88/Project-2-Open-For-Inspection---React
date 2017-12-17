import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import _ from 'underscore';

import Results from './Results';

const SERVER_URL = 'http://localhost:5000/properties.json'

class Search extends Component {
  constructor() {
    super();
    this.state = { properties: [] };

    this.fetchProperties = this.fetchProperties.bind(this);
  }

  fetchProperties( bedrooms, bathrooms ) {
    axios.get( SERVER_URL ).then( results => {
      const allProperties = results.data;
      console.log( allProperties );
      let queriedProperties = allProperties.filter( property => _( flight ).isMatch( { bedrooms: bedrooms, bathrooms: bathrooms } )
    );
    if ( _( queriedProperties ).isEmpty() ) {
      queriedProperties = allProperties;
    }
    console.log( queriedProperties );
    this.setState( { properties: queriedProperties } );
  });
  }


  render() {
    return (
      <React.Fragment>
        <h2>Search for a property</h2>
        <PropertySearch onSubmit={  this.fetchProperties }/>
        <Results properties={ this.state.properties }/>
      </React.Fragment>
    );
  }
}

class PropertySearch extends Component {
  constructor( props ) {
    super( props );
    this.state = { bedrooms: '', bathroom: '' };

    this._handleChangeBedrooms = this._handleChangeBedrooms.bind(this);

    this._handleChangeBathrooms = this._handleChangeBathrooms.bind(this);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChangeBedrooms(e) {
    this.setState( { bedrooms: e.target.value.toUpperCase() } );
  }

  _handleChangeBathrooms(e) {
    this.setState( { bathrooms: e.target.value.toUpperCase() } );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.bedrooms, this.state.bathrooms );
  }


  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="text" placeholder="bedrooms" onChange={ this._handleChangeBedrooms } />
        <input type="text" placeholder="bathrooms" onChange={ this._handleChangeBathrooms } />
        <input type="submit" value="Search Properties" />
      </form>
    );
  }
}

export default Search;
