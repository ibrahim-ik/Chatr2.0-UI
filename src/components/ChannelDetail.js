import React, { Component } from "react";
import axios from "axios";
import channelStore from "../stores/channelStore";
import { observer } from "mobx-react";

class ChannelDetail extends Component {
  componentDidMount() {
    console.log("MOUNT");
  }

  componentDidUpdate() {
    console.log("UPDATE");
  }

  render() {
    const messageLinks = channelStore.myMessages.map(
      message => (<h1>{message.username}</h1>, <p>{message.message}</p>)
    );
    return messageLinks;
  }
}
export default observer(ChannelDetail);
