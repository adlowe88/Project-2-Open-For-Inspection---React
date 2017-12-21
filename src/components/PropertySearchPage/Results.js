import React, {PureComponent as Component} from 'react';
import { Link } from 'react-router-dom';
import Property from '../PropertyCreatePage/Property';
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

function Results(props) {
  // constructor(props){
  //   super(props);
  //   console.log(props.properties);
  // }
  return (
    <div>
      <h1>Properties</h1>
      <div className="results-grid headings">
        <span className="results-address"><strong>Address</strong></span>
        <span className="results-suburb"><strong>Suburb</strong></span>
        <span className="results-landsize"><strong>Landsize</strong></span>
        <span className="results-bedroom"><strong>Bedrooms</strong></span>
        <span className="results-bathroom"><strong>Bathrooms</strong></span>
        <span className="results-privateparking"><strong>Private parking</strong></span>
        <span className="results-expectedprice"><strong>Expected price</strong></span>
      </div>




      { props.properties.map( f =>
        <div className="results-grid" key={ f.id }>
          <span className="results-address">{ f.address }</span>
          <span className="results-address">{ f.suburb }</span>
          <span className="results-landsize">{ f.landsize }</span>
          <span className="results-bedroom">{ f.bedrooms }</span>
          <span className="results-bathroom">{ f.bathrooms }</span>
          <span className="results-privateparking">{ f.private_parking + '' }</span>
          <span className="results-expectedprice">{ f.expected_price }</span>
        </div>
      )
     }
    </div>
  );
}

export default Results;
