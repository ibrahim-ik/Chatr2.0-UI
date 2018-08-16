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
import CreateMessage from "./components/createMessage";
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
          <Route path="/channels/create" component={createChannel} />
          <PrivateRoute
            path="/channels/:channelID/"
            // render={props => {
            //   channelStore.getAllMessages(props.match.params.channelID);
            //   return <ChannelDetail {...props} />;
            // }}
            component={ChannelDetail}
          />
          {/* <Route
            path="/channels/:channelID/send/"
            // render={props => {
            //   channelStore.addAMessage(props.match.params.channelID);
            //   return <createMessage id={props.match.params.channelID} />;
            // }}
            component={CreateMessage}
          />; }} /> */}
          <Redirect to="/welcome" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(observer(App));
