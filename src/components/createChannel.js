import React, { Component } from "react";
import authStore from "../stores/authStore";
import channelStore from "../stores/channelStore";
import { observer } from "mobx-react";

class createChannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  createChannel() {
    channelStore.addAChannel(this.state.name);
  }
  render() {
    return (
      <div>
        {authStore.errors.length > 0 && (
          <div className="alert alert-danger" role="alert">
            {authStore.errors}
          </div>
        )}
        <div className="form-group">
          {" "}
          <p>Place a name for the Channel</p>
          <input
            className="form-control"
            type="text"
            placeholder={"name"}
            required
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <button onClick={this.createChannel.bind(this)}>
          Create The Channel...
        </button>
      </div>
    );
  }
}

export default observer(createChannel);
