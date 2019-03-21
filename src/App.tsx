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
        <table>
          <thead>
            <tr>
              <td>Amount</td>
              <td>Power</td>
              <td>Measured</td>
              <td>Outages</td>
              <td>Started brewing</td>
              <td>Temperature</td>
            </tr>
          </thead>
          <tbody>
            {coffees.map(coffee => {
              return <Coffee {...coffee} key={id++} />;
            })}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </React.StrictMode>
  );
};

export default App;
