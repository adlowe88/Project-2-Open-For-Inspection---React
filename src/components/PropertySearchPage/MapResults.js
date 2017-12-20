import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import Search from './Search';



const suburb = "Bondi"
const sampleHouses = [
  "43 Dudley Street, Bondi NSW 2026",
  "40 Avoca Street, Bondi NSW 2026",
  "8 Rockley Street, Bondi NSW 2026",
  "5 Flood Street, Bondi NSW 2026"
]

let testList = sampleHouses.map((item,i) => <li key={i}>{item}</li>)







class MapResults extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>

          <Container />

      </div>
    );
  }

}


export default MapResults;
