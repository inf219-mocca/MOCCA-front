import { Paper } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import Coffee from "./Coffee";

let id = 0;

class App extends Component {
  public state = {
    coffees: [],
    error: null,
    isLoading: true
  };

  public componentDidMount(): void {
    this.getCoffee();
  }

  public render() {
    const { isLoading, coffees, error } = this.state;
    return (
      <React.Fragment>
        <h1>MOCCAPI</h1>
        <hr />
        {!isLoading ? (
          <Paper className="moccapi">
            <Table className="moccapi-table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Power</TableCell>
                  <TableCell align="right">Measured at</TableCell>
                  <TableCell align="right">Outages</TableCell>
                  <TableCell align="right">Started brewing</TableCell>
                  <TableCell align="right">Temperature</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {coffees.map(coffee => {
                  return <Coffee data={coffee} key={id++} />;
                })}
              </TableBody>
            </Table>
          </Paper>
        ) : (
          <p>Loading...</p>
        )}
      </React.Fragment>
    );
  }

  private getCoffee() {
    axios
      .get("/api/v1/coffee/")
      .then(res => {
        this.setState({ coffees: res.data, isLoading: false });
      })
      .catch(error => this.setState({ err: error, isLoading: false }));
  }
}

export default App;
