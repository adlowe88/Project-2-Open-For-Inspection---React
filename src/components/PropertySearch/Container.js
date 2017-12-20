import React, { PureComponent as Component } from 'react';
import ReactDOM from 'react-dom'
import GoogleApiComponent from './GoogleApiComponent'
import axios from 'axios';
import PropertySearch from './PropertySearch';


export class Map extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }
  componentDidMount() {

    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props; //??

      const maps = google.maps;
      console.log(this.props);
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      // let lat = 37.774929;
      // let lng = -122.419416;
      const center = new maps.LatLng( this.props.centerCoords );
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }
  render() {
    // this div needs a height / width or the map renders at 0 x 0 pixels.
    return (
      <div ref='map'  style={ {height: '50vh', width: '50vh'} }>
        Loading map...
      </div>
    )
  }

}


export class Container extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        suburb: "bondi",
        houseList: [
          "46 Thorn Street, Pennant Hills, NSW 2120",
          "7 Boyd Avenue, West Pennant Hills, NSW 2120",
          "47 Orana Avenue, Asquith, NSW 2077",
          "1 Market Street Sydney, NSW 2000"
        ],
        center: { lat: -33.88, lng: 151.2 }
      }
      this._geoCoder = this._geoCoder.bind(this)
      this._clickHandler = this._clickHandler.bind(this)
    }


  _clickHandler(address) {
    console.log(this._geoCoder(address));
  }

  _geoCoder(address) {
    console.log("address is the passed in argument: ", address);
    let searchUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${address}&=AIzaSyB7nJABK2HEiQKo4V-FCEMWX5xag8vVJeA`
    let coords = { lat:0, lng: 0 }
    //
    // axios.get(searchUrl).then( results => {
    //   this.setState( {center: {
    //     lat: results.data.results[0].geometry.location.lat,
    //     lng: results.data.results[0].geometry.location.lng
    //   }})
    //   console.log(this.state.center);
    // } );




    axios.get(searchUrl).then( results => {
      coords.lat = results.data.results[0].geometry.location.lat
      coords.lng =  results.data.results[0].geometry.location.lng
      // coords.lat = 5
      // coords.lng =  4
      console.log(coords)
      return coords
    } );


    //////
  }

  render() {
    const style = {
      width: '50vw',
      height: '50vh',
      border: '1px solid black'
    } // set sht style for the div in which container is rendered. czreful as the map can overlap... // if no size is specified here the map will be full screen width, and will have sufficient height to contain the components. - block



    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>
      <div style={style}>
        <Map google={this.props.google} centerCoords={ this.state.center }/>
      </div>
        <div>
          <button onClick={ () => {this._clickHandler("46 thorn street pennant hills nsw 2120")} }>button for testing</button>
        </div>
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: "AIzaSyB7nJABK2HEiQKo4V-FCEMWX5xag8vVJeA"
})(Container)
