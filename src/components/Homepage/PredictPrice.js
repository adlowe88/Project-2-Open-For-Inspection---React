import React, {PureComponent as Component} from 'react';


const MLR =[['Asquith',495.3,0.64,104,29],['Bondi',847.6,5.71,56.3,107.8],['Fairfield',173.11,0.69,123,12],['Marrickville',703.7,0.51,208,120],['Newtown',-43.2,0.35,598.6,147.95]];

class PredicForm extends Component {
  constructor(){
    super();
    this.state ={
      suburb :'',
      land_area :'',
      num_of_BedRoom :'',
      num_of_BathRoom :''
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange_suburb = this._handleChange_suburb.bind(this);
    this._handleChange_num_of_bedRoom = this._handleChange_num_of_bedRoom.bind(this);
    this._handleChange_num_of_bathRoom = this._handleChange_num_of_bathRoom.bind(this);
    this._handleChange_land_area = this._handleChange_land_area.bind(this);
  }

  _handleChange_suburb(e){
    this.setState({suburb :e.target.value});
  }
  _handleChange_num_of_bedRoom(e){
    this.setState({num_of_BedRoom:e.target.value});
  }
  _handleChange_num_of_bathRoom(e){
    this.setState({num_of_BathRoom:e.target.value});
  }
  _handleChange_land_area(e){
    this.setState({land_area:e.target.value});
  }


  _handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.suburb,this.state.land_area,this.state.num_of_BedRoom,this.state.num_of_BathRoom);
    this.setState({
    suburb :'',
    land_area :'',
    num_of_BedRoom :'',
    num_of_BathRoom :''
    })
  }

  render(){
    return(
      <form className ="predict-form" onSubmit={this._handleSubmit} >
        <label className = "predict-search"><span className = "predict-label">Suburb &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <select className = "predict-select" value={this.state.suburb} onChange={ this._handleChange_suburb} className = 'predict-select'>
          <option value = "">Select</option>
          <option value = "Asquith">Asquith</option>
          <option value = "Bondi">Bondi</option>
          <option value = "Fairfield">Fairfield</option>
          <option value = "Marrickville">Marrickville</option>
          <option value = "Newtown">Newtown</option>
        </select>
        </label><br/>

        <label className = "predict-search"><span className = "predict-label">Bedrooms &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <select className = "predict-select" value={this.state.num_of_BedRoom} onChange={ this._handleChange_num_of_bedRoom} className = 'predict-select'>
          <option value = "">Select</option>
          <option value = "1">1</option>
          <option value = "2">2</option>
          <option value = "3">3</option>
          <option value = "4">4</option>
          <option value = "5">5</option>
          <option value = "6">6+</option>
        </select>
        </label><br/>

        <label className = "predict-search"><span className = "predict-label">Bathrooms &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <select className = "predict-select" value ={this.state.num_of_BathRoom} onChange={ this._handleChange_num_of_bathRoom} className = 'predict-select'>
          <option value = "">Select</option>
          <option value = "1">1</option>
          <option value = "2">2</option>
          <option value = "3">3</option>
          <option value = "4">4+</option>
        </select>
        </label><br/>

        <label className = "predict-search"><span className = "predict-label">Land Size &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input className = "predict-input" type="text" placeholder="m^2"value = {this.state.land_area} onChange={this._handleChange_land_area} />
        </label><br />

        <input type="submit" value="???" className="predict-button" />
      </form>

    )
  }
}


class PredictPrice extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:"",
      predicPrice:""
    };
    this.predicPriceFunction = this.predicPriceFunction.bind(this);
  }
  predicPriceFunction(sub,land,bed,bath){
    let result = 0;
    let b = [1,+land,+bed,+bath];
    console.log(b);
    for (let i=0;i<MLR.length;i++){
      if (MLR[i][0]==sub){
        let a = MLR[i].slice(1);
        a = a.map(function(s){return +s});
        console.log(a);
        for (let j=0;j<a.length;j++){
          result +=b[j]*a[j]
        }
      }
    }
    result = result.toFixed(2);
    console.log(result);
    this.setState({name:"Property Evaluation:"});
    this.setState({predicPrice:((+result)/1000).toFixed(2)+'M'});
  }

  render(){
    return(
      <div class = "predict-result">
      <PredicForm onSubmit={this.predicPriceFunction}/>
      <h5>{this.state.name} {this.state.predicPrice} </h5>
      </div>

    )
  }
}




export default PredictPrice
