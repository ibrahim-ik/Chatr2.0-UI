import React, { Component } from "react";
import authStore from "../stores/authStore";
//import channelStore from "../stores/channelStore";
import { observer } from "mobx-react";

class createChannel extends Component {
  render() {
    return (
      <div>
        <form>
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
              onChange={e => {
                authStore.name = e.target.value;
              }}
            />
          </div>
        </form>
      </div>
      //console.log(authStore.channelNames);
    );
  }
}

export default observer(createChannel);
