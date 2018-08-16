import React, { Component } from "react";
import authStore from "../stores/authStore";
import channelStore from "../stores/channelStore";
import { observer } from "mobx-react";
import ChannelDetail from "./ChannelDetail";

class CreateMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      id: this.props.id
    };
  }

  handleChange(e) {
    // authStore.name = e.target.value;
    this.setState({ message: e.target.value });
  }

  createMessage() {
    channelStore.addAMessage(this.state.id, this.state.message);
  }
  // () => channelStore.addAMessage("authStore.name")
  render() {
    //console.log(this.id);
    return (
      <div>
        {authStore.errors.length > 0 && (
          <div className="alert alert-danger" role="alert">
            {authStore.errors}
          </div>
        )}
        <div className="form-group">
          {" "}
          <input
            className="form-control"
            type="text"
            placeholder={"type your message"}
            required
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <button onClick={this.createMessage.bind(this)}>
          Send The Message...
        </button>
      </div>
    );
  }
}

export default observer(CreateMessage);
