import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
import Results from '../PropertySearchPage/Results';
import { HashRouter as Router, Route } from 'react-router-dom';

import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/properties.json';

class PropertiesForm extends Component {
  constructor( props ) {
    super( props );
    this.state = { address: '', suburb: '', landsize: '', bedrooms: '', bathrooms: '', private_parking: '', expected_price: '' };

    this._handleChangeAddress = this._handleChangeAddress.bind(this);

    this._handleChangeSuburb = this._handleChangeSuburb.bind(this);

    this._handleChangeLandsize = this._handleChangeLandsize.bind(this);

    this._handleChangeBedrooms = this._handleChangeBedrooms.bind(this);

    this._handleChangeBathrooms = this._handleChangeBathrooms.bind(this);

    this._handleChangePrivateParking = this._handleChangePrivateParking.bind(this);

    this._handleChangeExpectedPrice = this._handleChangeExpectedPrice.bind(this);

    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleChangeAddress(e) {
    this.setState( { address: e.target.value } );
  }

  _handleChangeSuburb(e) {
    this.setState( { suburb: e.target.value } );
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
    this.props.onSubmit( this.state.address, this.state.suburb, this.state.landsize, this.state.bedrooms, this.state.bathrooms, this.state.private_parking, this.state.expected_price );
    this.setState( { address: '', suburb: '', landsize: '', bedrooms: '', bathrooms: '', private_parking: '', expected_price: '' } );
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit} className= "prop-form">

        <input type="text" value={this.state.address} onChange={this._handleChangeAddress} placeholder="Address"  />

        <input type="text" value={this.state.suburb} onChange={this._handleChangeSuburb} placeholder="Suburb"  />

        <input type="text" value={this.state.landsize} onChange={this._handleChangeLandsize} placeholder="Landsize"  />

        <input type="text" value={this.state.bedrooms} onChange={this._handleChangeBedrooms} placeholder="Bedrooms"  />

        <input type="text" value={this.state.bathrooms} onChange={this._handleChangeBathrooms} placeholder="Bathrooms"  />

        <input type="text" value={this.state.private_parking} onChange={this._handleChangePrivateParking} placeholder="Private Parking"  />

        <input type="text" value={this.state.expected_price} onChange={this._handleExpectedPrice} placeholder="Expected Price"  />

        <input type="submit" value="Create Property" className = "prop-form-submit" />

      </form>
    );
  }

}

class Property extends Component {
  constructor( props ) {
    super( props );
    let match = props.match;

    this.state = { properties: [], propertyId: match.params.propertyId };
    this.createProperty = this.createProperty.bind(this);

    const fetchProperties = () => {
      axios.get(SERVER_URL).then( results =>
      this.setState( { properties: results.data } ) );
      setTimeout(fetchProperties, 1000);
    }
    fetchProperties();
  }

  createProperty(address, suburb, landsize, bedrooms, bathrooms, parking, price) {
    axios.post(SERVER_URL, { address: address, suburb: suburb, landsize: landsize, bedrooms: bedrooms, bathrooms: bathrooms, private_parking: parking, expected_price: price }).then(results =>
      {
      this.setState({ properties: [results.data, ...this.state.properties] })
    });
  }

  render() {
    return (
      <div className = "property-page">

        <div className="page-logo">
          <Link to="/"><img src="https://i.imgur.com/DwQZHkO.png" alt="logo" className = "logo1" /></Link>
        </div>

        <h1>Add Property</h1>
        <div className = "fake-nav">
          <h2><Link to="/">Home</Link></h2>
          <h2><Link to="/search">Search Property</Link></h2>
        </div>
        <PropertiesForm onSubmit={ this.createProperty }/>
        <Results properties={ this.state.properties }/>
      </div>
    );
  }
}

export default Property;
// <Link to="/"><img src={image} alt="logo" className = "prop-logo" /></Link>
