import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import { MainWrapper, Header, Main, Footer } from "./styles/Main";
import Global from "./styles/Global";
import { H1 } from "./styles/Headers";
import CoffeeTable from "./CoffeeList";

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
          {!isLoading ? <CoffeeTable {...coffees} /> : <p>Loading...</p>}
        </Main>
        <Footer>Hello world!</Footer>
      </MainWrapper>
    </React.StrictMode>
  );
};

export default App;
