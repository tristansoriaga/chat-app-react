import React from "react";
import ReactDOM from "react-dom";
import MessageList from "./components/MessageList";
import NewRoomForm from "./components/NewRoomForm";
import MessageRoom from "./components/RoomList";
import SendMessageForm from "./components/SendMessageForm";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MessageList />
      <NewRoomForm />
      <MessageRoom />
      <SendMessageForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
