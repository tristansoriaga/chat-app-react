import React from "react";

const Message = props => {
  return (
    <div className="message">
      <p className="message-username">{props.username}</p>
      <p className="message-text">{props.text}</p>
    </div>
  );
};

export default Message;
