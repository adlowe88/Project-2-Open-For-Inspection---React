import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import _ from 'underscore';

import Results from './Results';
import MapResults from './MapResults';

const SERVER_URL = 'http://localhost:5000/properties.json'

class Search extends Component {
  constructor() {
    super();
    this.state = { properties: [] };

    this.fetchProperties = this.fetchProperties.bind(this);
  }

  fetchProperties( suburb, landsize, bedrooms, bathrooms, private_parking, expected_price ) {
    axios.get(SERVER_URL).then( results => {
      const allProperties = results.data;
      console.log( allProperties );
      let queriedProperties = allProperties.filter( property => _( property ).isMatch( { suburb: suburb, landsize: landsize, bedrooms: bedrooms, bathrooms: bathrooms, private_parking: private_parking, expected_price: expected_price } )
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
        <MapResults />
      </React.Fragment>
    );
  }
}

class PropertySearch extends Component {
  constructor( props ) {
    super( props );
    this.state = { suburb: '', landsize: '', bedrooms: '', bathroom: '', private_parking: '', expected_price: '' };

    this._handleChangeSuburb = this._handleChangeSuburb.bind(this);

    this._handleChangeLandsize = this._handleChangeLandsize.bind(this);

    this._handleChangeBedrooms = this._handleChangeBedrooms.bind(this);

    this._handleChangeBathrooms = this._handleChangeBathrooms.bind(this);

    this._handleChangePrivateParking = this._handleChangePrivateParking.bind(this);

    this._handleChangeExpectedPrice = this._handleChangeExpectedPrice.bind(this);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChangeSuburb(e) {
    this.setState( { suburb: e.target.value
    } );
  }

  _handleChangeLandsize(e) {
    this.setState( { landsize: e.target.value.toUpperCase() } );
  }

  _handleChangeBedrooms(e) {
    this.setState( { bedrooms: e.target.value.toUpperCase() } );
  }

  _handleChangeBathrooms(e) {
    this.setState( { bathrooms: e.target.value.toUpperCase() } );
  }

  _handleChangePrivateParking(e) {
    this.setState( { private_parking: e.target.value.toUpperCase() } );
  }

  _handleChangeExpectedPrice(e) {
    this.setState( { expected_price: e.target.value.toUpperCase() } );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.suburb, this.state.landsize, this.state.bedrooms, this.state.bathrooms, this.state.private_parking, this.state.expected_price );
  }


  render() {
    return (
      <form onSubmit={ this._handleSubmit }>

        <select value={this.state.selectValue} onChange={ this._handleChangeSuburb }>
          <option value="">Select Suburb</option>
          <option value="Asquith">Asquith</option>
          <option value="Bondi">Bondi</option>
          <option value="Fairfield">Fairfield</option>
          <option value="Marrickville">Marrickville</option>
          <option value="Newtown">Newtown</option>
          <option value="Sydney">Sydney</option>
        </select>

        <input type="text" placeholder="landsize" onChange={ this._handleChangeLandsize } />

        <input type="text" placeholder="bedrooms" onChange={ this._handleChangeBedrooms } />

        <input type="text" placeholder="bathrooms" onChange={ this._handleChangeBathrooms } />

        <input type="text" placeholder="private parking" onChange={ this._handleChangePrivateParking } />

        <input type="text" placeholder="expected price" onChange={ this._handleChangeExpectedPrice } />

        <input type="submit" value="Search Properties" />
      </form>
    );
  }
}

export default Search;
