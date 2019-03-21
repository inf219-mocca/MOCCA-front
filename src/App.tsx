import { Paper } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Coffee from "./Coffee";

let id = 0;

const App = () => {
  const [coffees, setCoffees] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  async function getCoffee() {
    try {
      const response = await axios.get("/api/v1/coffee/");
      setCoffees(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getCoffee();
  }, []);

  return (
    <React.StrictMode>
      <h1>MOCCAPI</h1>
      <hr />
      {!isLoading ? (
        <Paper className="moccapi">
          <Table className="moccapi-table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Power</TableCell>
                <TableCell align="right">Measured</TableCell>
                <TableCell align="right">Outages</TableCell>
                <TableCell align="right">Started brewing</TableCell>
                <TableCell align="right">Temperature</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coffees.map(coffee => {
                return <Coffee {...coffee} key={id++} />;
              })}
            </TableBody>
          </Table>
        </Paper>
      ) : (
        <p>Loading...</p>
      )}
    </React.StrictMode>
  );
};

export default App;
