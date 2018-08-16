import React from "react";
import { decorate, observable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.54"
});

class ChannelStore {
  constructor() {
    this.channelNames = [];
    this.myMessages = [];
    this.name = { test: "test test" };
  }
  getAllChannels() {
    instance
      .get("/channels/")
      .then(res => res.data)
      .then(data => {
        this.channelNames = data;
      })
      .catch(err => console.log(err.response.data));
  }

  getAllMessages(id) {
    instance
      .get(`/channels/${id}/`)
      .then(res => res.data)
      .then(data => {
        this.myMessages = data;
      })
      .catch(err => console.log(err.response.data));
  }
  addAChannel(name) {
    console.log("hueheuhue");
    let data = {
      name: name
    };
    instance
      .post("/channels/create/", data)
      .then(response => {
        console.log("posted succesfully");
        this.getAllChannels();
      })
      .catch(error => {
        console.error(error);
        console.log("Not succesfull");
      });
  }

  addAMessage(id, message) {
    let data = {
      message: message
    };
    instance
      .post(`/channels/${id}/send/`, data)
      .then(response => {
        console.log("posted succesfully");
        this.getAllChannels();
        this.getAllMessages(id);
      })
      .catch(error => {
        console.error(error);
        console.log("Not succesfull");
      });
  }
}

decorate(ChannelStore, {
  channelNames: observable,
  myMessages: observable,
  name: observable
});
const channelStore = new ChannelStore();
channelStore.getAllChannels();
// channelStore.addAMessage(this.name);
export default channelStore;
