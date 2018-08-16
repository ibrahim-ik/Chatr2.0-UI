import React, { Component } from "react";
import channelStore from "../stores/channelStore";
import CreateMessage from "./createMessage";
import { observer } from "mobx-react";

class ChannelDetail extends Component {
  componentDidMount() {
    console.log("MOUNT");
    channelStore.getAllMessages(this.props.match.params.channelID);
  }

  componentDidUpdate() {
    console.log("UPDATE");
  }

  textField() {
    <div>
      <form>
        <input className="text" />
      </form>
    </div>;
  }

  render() {
    const messageLinks = channelStore.myMessages.map(message => {
      return (
        <div>
          <h1>{message.message}</h1> <p>{message.username}</p>{" "}
          <p>{message.timestamp}</p>
        </div>
      );
    });
    return (
      <div>
        {messageLinks}
        <hr />
        <CreateMessage id={this.props.match.params.channelID} />
      </div>
    );
  }
}

export default observer(ChannelDetail);
