import React, { PureComponent as Component } from 'react';
import Property from './Property';
import Results from './Results';
import Search from './Search';

class ResultsSearch extends Component {
  render() {
    const property = this.props.property;
    return (
      <div className="results-grid" key={ property.id }>
        <span className="results-address">{ property.address }</span>
        <span className="results-suburb">{ property.suburb }</span>

        <span className="results-landsize">{ property.landsize }</span>

        <span className="results-bedroom">{ property.bedrooms }</span>

        <span className="results-bathroom">{ property.bathrooms }</span>

        <span className="results-privateparking">{ property.private_parking + '' }</span>

        <span className="results-expectedprice">{ property.expected_price }</span>
      </div>
    );
  }
}

export default ResultsSearch;
