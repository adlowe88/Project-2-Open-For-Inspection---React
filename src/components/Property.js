import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
import Results from './Results';
import { HashRouter as Router, Route } from 'react-router-dom';

import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/properties.json';

class PropertiesForm extends Component {
  constructor( props ) {
    super( props );
    this.state = { address: '', bedrooms: '', bathrooms: '' };

    this._handleChangeAddress = this._handleChangeAddress.bind(this);

    this._handleChangeBedrooms = this._handleChangeBedrooms.bind(this);

    this._handleChangeBathrooms = this._handleChangeBathrooms.bind(this);

    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleChangeAddress(e) {
    this.setState( { address: e.target.value } );
  }

  _handleChangeBedrooms(e) {
    this.setState( { bedrooms: e.target.value } );
  }

  _handleChangeBathrooms(e) {
    this.setState( { bathrooms: e.target.value } );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.address, this.state.bedrooms, this.state.bathrooms );
    this.setState( { address: '', bedrooms: '', bathrooms: '' } );
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input type="text" value={this.state.address} onChange={this._handleChangeAddress} placeholder="address"/>

        <input type="text" value={this.state.bedrooms} onChange={this._handleChangeBedrooms} placeholder="bedrooms"/>

        <input type="text" value={this.state.bathrooms} onChange={this._handleChangeBathrooms} placeholder="bathrooms"/>

        <input type="submit" value="create property"/>
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
      axios.get( SERVER_URL ).then( results =>
      this.setState( { properties: results.data } ) );
    }
    fetchProperties();
  }

  createProperty(address, bedrooms, bathrooms) {
    axios.post(SERVER_URL, { address: address, bedrooms: bedrooms, bathrooms: bathrooms }).then(results =>
    {
      this.setState({ properties: [results.data, ...this.state.properties] })
    });
  }

  render() {
    return (
      <div>
        <h1>properties website</h1>
        <p>Link to="/search"></Link></p>
        <PropertiesForm onSubmit={ this.createProperty }/>
        <Results properties={ this.state.properties }/>
      </div>
    );
  }
}

export default Property;
