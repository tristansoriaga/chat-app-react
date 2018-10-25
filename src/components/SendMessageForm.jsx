import React, { Component } from "react";

class SendMessageForm extends Component {
  state = {
    message: ""
  };

  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.message);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="send-message-form">
        <input
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type message and hit ENTER"
          type="text"
        />
      </form>
    );
  }
}

export default SendMessageForm;
