import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import authStore from "../../stores/authStore";
import channelStore from "../../stores/channelStore";
import { observer } from "mobx-react";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

class ChannelNavLink extends Component {
  render() {
    if (authStore.isLoggedIn) {
      return (
        <li
          className="nav-item"
          data-toggle="tooltip"
          data-placement="right"
          title={this.props.channel.name}
        >
          <NavLink
            className="nav-link"
            to={`/channels/${this.props.channel.id}`}
          >
            <FontAwesomeIcon icon={faHashtag} />
            <span className="nav-link-text"> {this.props.channel.name}</span>
          </NavLink>
        </li>
      );
    } else {
      return <h3> your not loggedin </h3>;
    }
  }
}
export default observer(ChannelNavLink);
