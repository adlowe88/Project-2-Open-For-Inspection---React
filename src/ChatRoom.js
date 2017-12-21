import React, { Component } from 'react';
import Layout from './components/Layout'
import './index.css';

class ChatRoom extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: ''
    }

    this.clicking_out = this.clicking_out.bind(this);
    this.clicking_chat = this.clicking_chat.bind(this);
  }

  clicking_out(e){
    e.preventDefault();
    window.location.href = "http://localhost:3000/";
  }

  clicking_chat(e){

    e.preventDefault();
    window.location.href += "chat/";

  }


  render() {
    return (
      <div>
        <form onSubmit = {this.clicking_out}>
          <div>
            <button>
              Sign Out
            </button>
          </div>
        </form>

        <form onSubmit = {this.clicking_chat}>
          <div>
            <button>
              Chat
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ChatRoom;
