import React, { Component } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    senderId: "perborgen",
    text: "what's going on?"
  },
  {
    id: 2,
    senderId: "jensen",
    text: "nothing"
  },
  {
    id: 3,
    senderId: "perborgen",
    text: "good"
  }
];

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        {this.props.messages.map(message => (
          <div className="message" key={message.id}>
            <p className="message-username">{message.senderId}</p>
            <p className="message-text">{message.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default MessageList;
