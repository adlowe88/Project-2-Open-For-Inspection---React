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
    this.state = {
      gMapKey: "AIzaSyB7nJABK2HEiQKo4V-FCEMWX5xag8vVJeA"
    }
  }

  // Stupid vertsion
  // render() {
  //   return (
  //     <div>
  //         <Container />
  //     </div>
  //   );
  // }

  // should get suburb as prop from above
  // SIMPLE VERSION
  render(){
    return (
    <div class = "map-results-div">
      <div>

      </div>
      <iframe
        width="700"
        height="350"
        src={`https://www.google.com/maps/embed/v1/place?q=${this.props.suburb}&key=${this.state.gMapKey}`}>
       </iframe>
       <div>

       </div>
    </div>
    )
  }

/////put some suburb info here, move div to left.




////// put some suburb info here, move div to right.









}


export default MapResults;
