import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import Coffee, { ICoffee } from "./Coffee";
import { Table, TableHead, TableBody, Td } from "./styles/Table";

const App = () => {
  const [coffees, setCoffees] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getCoffee = async () => {
    const response = await axios.get("/api/v1/coffee/");
    try {
      setCoffees(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCoffee();
  }, []);

  return (
    <React.StrictMode>
      <h1>MOCCAPI</h1>
      <hr />
      {!isLoading ? (
        <Table>
          <TableHead>
            <tr>
              <Td>Amount</Td>
              <Td>Power</Td>
              <Td>Measured</Td>
              <Td>Outages</Td>
              <Td>Started brewing</Td>
              <Td>Temperature</Td>
            </tr>
          </TableHead>
          <TableBody>
            {coffees.map((coffee: ICoffee) => {
              return <Coffee {...coffee} key={coffee.id} />;
            })}
          </TableBody>
        </Table>
      ) : (
        <p>Loading...</p>
      )}
    </React.StrictMode>
  );
};

export default App;
