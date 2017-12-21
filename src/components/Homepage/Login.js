import React,{PureComponent as Component} from 'react';
import axios from 'axios';

const USERLOGIN_URL = 'http://localhost:5000/login'
const USER_URL = 'http://localhost:5000/'

class LoginForm extends Component {
  constructor(){
    super();
    this.state={
      username:'',
      password:''
    }
    this._handleChangeUsername = this._handleChangeUsername.bind(this);
    this._handleChangePassword = this._handleChangePassword.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
    _handleSubmit(event){
      event.preventDefault();
      this.props.onSubmit(this.state.username,this.state.password);

    }
    _handleChangeUsername(e){
      this.setState({username:e.target.value})
    };
    _handleChangePassword(e){
      this.setState({password:e.target.value})
    };

  render(){
    return(
      <div>
      <form className = "login-form" onSubmit ={this._handleSubmit} >
      <label className = "login-label"> User Name
      <input value = {this.state.username} onChange = {this._handleChangeUsername} />
      </label><br/>
      <label className = "login-label"> Password
      <input type="password" value = {this.state.password} onChange = {this._handleChangePassword} />
      </label><br/>
      <input type="submit" value="Submit" className="login-button" />
      </form>
      </div>
    )
  }
}

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      user_authentication:false
    }
  }
  checkUser(n,p){
    axios.post(USERLOGIN_URL,{email:n, password:p}).then(console.log('post'));
    axios.get(USER_URL).then(results => {console.log(results)});
  }

  render(){
    return(
      <div>
      <LoginForm onSubmit = {this.checkUser}/>
      </div>
    )
  }
}




export default  Login
