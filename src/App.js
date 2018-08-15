import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

// Components
import NavBar from "./components/Navigation/NavBar";
import AuthModals from "./components/Modals/AuthModals";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Welcome from "./components/Welcome";
import SuperSecretPage from "./components/SuperSecretPage";
import createChannel from "./components/createChannel";
import ChannelDetail from "./components/ChannelDetail";
import channelStore from "./stores/channelStore";

class App extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <NavBar />
        <AuthModals />
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <PrivateRoute path="/private" component={SuperSecretPage} />
          <Route
            path="/channels/:channelID/"
            render={props => {
              channelStore.getAllMessages(props.match.params.channelID);
              return <ChannelDetail {...props} />;
            }}
          />
          <Route path="/channels/create" component={createChannel} />
          <Redirect to="/welcome" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(observer(App));
