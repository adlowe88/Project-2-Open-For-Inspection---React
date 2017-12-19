import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import _ from 'underscore';

import Results from './Results';
import MapResults from './MapResults';

const SERVER_URL = 'http://localhost:5000/properties.json'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { properties: [] };

    this.fetchProperties = this.fetchProperties.bind(this);
  }

  // fetchProperties( suburb, landsize, bedrooms, bathrooms, parking, price ) {
  //
  //   console.log('searching for property from suburb of', suburb, 'with landsize of', landsize);
  //   console.log(this.state);
  //
  //   axios.get(SERVER_URL).then( results => {
  //     const allProperties = results.data;
  //     console.log( allProperties );
  //     let queriedProperties = allProperties.filter( property => _( allProperties ).isMatch( { suburb: suburb, landsize: landsize, bedrooms: bedrooms, bathrooms: bathrooms, private_parking: parking, expected_price: price } )
  //   );
  //   if ( _( queriedProperties ).isEmpty() ) {
  //     queriedProperties = allProperties;
  //   }
  //   console.log( queriedProperties );
  //   this.setState( { properties: queriedProperties } );
  // });
  // }

  fetchProperties( suburb, landsize, bedrooms, bathrooms, parking, price ) {
    axios.get(SERVER_URL).then(function (results){
      let array_properties = [];
      let allProperties = results.data;
      console.log(allProperties);
      for (let i=0; i<results.data.length; i++)
        if (results.data[i].suburb === suburb && results.data[i].landsize == landsize || results.data[i].landsize === landsize || results.data[i].bedrooms === bedrooms || results.data[i].bathrooms === bathrooms || results.data[i].parking === parking || results.data[i].price === price)
          array_properties.push(results.data[i]);
          this.setState({properties : array_properties});
    }.bind(this));
  }


  render() {
    return (
      <React.Fragment>
        <h2>Search for a property</h2>
        <PropertySearch onSubmit={ this.fetchProperties }/>
        <Results properties={ this.state.properties }/>
        <MapResults />
      </React.Fragment>
    );
  }
}

class PropertySearch extends Component {
  constructor( props ) {
    super( props );
    this.state = { suburb: '', landsize: '', bedrooms: '', bathrooms: '', private_parking: '', expected_price: '' };

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
    this.setState( { landsize: e.target.value } );
  }

  _handleChangeBedrooms(e) {
    this.setState( { bedrooms: e.target.value } );
  }

  _handleChangeBathrooms(e) {
    this.setState( { bathrooms: e.target.value } );
  }

  _handleChangePrivateParking(e) {
    this.setState( { private_parking: e.target.value } );
  }

  _handleChangeExpectedPrice(e) {
    this.setState( { expected_price: e.target.value } );
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
