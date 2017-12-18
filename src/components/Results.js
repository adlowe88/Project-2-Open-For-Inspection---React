import React from 'react';
import { Link } from 'react-router-dom';
import Property from './Property';

function Results(props) {
  return (
    <div>
      <h1>Properties</h1>
      <div className="results-grid headings">
        <span className="results-address">Address</span>
        <span className="results-landsize">Landsize</span>
        <span className="results-bedroom">Bedrooms</span>
        <span className="results-bathroom">Bathrooms</span>
        <span className="results-privateparking">Private parking</span>
        <span className="results-expectedprice">Expected price</span>
      </div>

      { props.properties.map( f =>
        <div className="results-grid" key={ f.id }>
          <span className="results-address">{ f.address }</span>

          <span className="results-landsize">{ f.landsize }</span>

          <span className="results-bedroom">{ f.bedrooms }</span>

          <span className="results-bathroom">{ f.bathrooms }</span>

          <span className="results-privateparking">{ f.private_parking + '' }</span>

          <span className="results-expectedprice">{ f.expected_price }</span>
        </div>
      )}
    </div>
  );
}

export default Results;
