import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Button variant="contained" color="primary" onClick={onClick}>
        Ping
      </Button>
    );
  }
}

function onClick(event: any) {
  console.log("Testing...");
  axios
    .get("/api/v1/coffee/now")
    .then(res => {
      console.log(JSON.stringify(res.data, null, 4));
    })
    .catch(err => {
      console.log(err);
    });
}

export default App;
