import React, {PureComponent as Component} from 'react';


class SignupForm extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange (e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    if (this.state.password === "chicken")
    {
        if (this.state.username === "Jose")
        {
          window.location.href = "http://localhost:3000/jose/";
        }

        if (this.state.username === "Damian")
        {
          window.location.href = "http://localhost:3000/damian/";
        }

        if (this.state.username === "Bing")
        {
          window.location.href = "http://localhost:3000/bing/";
        }
    }

    else {
      window.location.href = "http://localhost:3000";
    }

  }


  render(){
    return (
      <form onSubmit = {this.onSubmit}>
        <div>
        <label>Username</label>
        <input
          value = {this.state.username}
          onChange = {this.onChange}
          type = "text"
          name = "username"
        />
        </div>

        <div>
        <label>Password</label>
        <input
          value = {this.state.password}
          onChange = {this.onChange}
          type = "password"
          name = "password"
        />
        </div>

        <div>
          <button>
           Sign Up
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
