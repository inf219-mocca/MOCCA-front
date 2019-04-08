import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import CoffeeList from "./CoffeeList";
import { Table, TableHead, TableBody, Td } from "./styles/Table";
import { MainWrapper, Header, Main, Footer } from "./styles/Main";
import Global from "./styles/Global";
import { H1 } from "./styles/Headers";
import { ICoffee } from "./Coffee";

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
      <Global />
      <MainWrapper>
        <Header>
          <H1>MOCCAPI</H1>
        </Header>
        <Main>
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
                {coffees.map((coffee: ICoffee) => (
                  <CoffeeList {...coffee} key={coffee.id} />
                ))}
              </TableBody>
            </Table>
          ) : (
            <p>Loading...</p>
          )}
        </Main>
        <Footer>Hello world!</Footer>
      </MainWrapper>
    </React.StrictMode>
  );
};

export default App;
