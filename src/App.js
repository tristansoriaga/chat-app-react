import React, { Component } from "react";
import Chatkit from "@pusher/chatkit";
import MessageList from "./components/MessageList";
import NewRoomForm from "./components/NewRoomForm";
import RoomList from "./components/RoomList";
import SendMessageForm from "./components/SendMessageForm";
import { tokenUrl, instanceLocator } from "./config";

class App extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: "jensen",
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });

    chatManager.connect().then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: 19267014,
        hooks: {
          onNewMessage: message => {
            console.log("message.text", message.text);
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
        }
      });
    });
  }
  render() {
    return (
      <div className="app">
        <RoomList />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
