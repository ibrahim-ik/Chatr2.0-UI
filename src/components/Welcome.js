import React, { Component } from "react";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import SuperSecretPage from "./SuperSecretPage";

class Welcome extends Component {
  loggedInUser() {
    if (authStore.isLoggedIn) {
      return (
        <div className="container text-center my-auto z-1">
          <SuperSecretPage />{" "}
        </div>
      );
    } else {
      return (
        <header className="masthead d-flex">
          <div className="container text-center my-auto z-1">
            <h1 className="mb-1">WELCOME TO CHATR</h1>
            <h3 className="mb-5">
              <em>You're gonna need to login to see the messages</em>
            </h3>
            <button
              className="btn btn-primary btn-lg"
              data-toggle="modal"
              data-target="#loginModal"
            >
              Login
            </button>

            <button
              className="btn btn-primary btn-lg"
              data-toggle="modal"
              data-target="#signupModal"
            >
              signup
            </button>
          </div>
          <div className="overlay z-0" />
        </header>
      );
    }
  }
  render() {
    return this.loggedInUser();
  }
}

export default observer(Welcome);
