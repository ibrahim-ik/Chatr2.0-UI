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
  }
  getAllChannels() {
    instance
      .get("/channels/")
      .then(res => res.data)
      .then(data => {
        this.channelNames = data;
        console.log(this.channelNames);
      })
      .catch(err => console.log(err.response.data));
  }

  getAllMessages(id) {
    instance
      .get(`/channels/${id}/`)
      .then(res => res.data)
      .then(data => {
        console.log(data);

        this.myMessages = data;
      })
      .catch(err => console.log(err.response.data));
  }
}

decorate(ChannelStore, {
  channelNames: observable,
  myMessages: observable
});
const channelStore = new ChannelStore();
channelStore.getAllChannels();
export default channelStore;
