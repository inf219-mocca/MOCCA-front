import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import Coffee from "./components/Coffee";
import CoffeeTable from "./components/CoffeeList";
import Global from "./styles/Global";
import { H1 } from "./styles/Headers";
import { Footer, Header, Main, MainWrapper } from "./styles/Main";

const App = () => {
  const [coffees, setCoffees] = useState([]);
  const [latestCoffee, setLatestCoffee] = useState();
  const [, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getCoffees = async () => {
    const respCoffees = await axios.get("/api/v1/coffee/");
    const respLatest = await axios.get("/api/v1/coffee/now");
    try {
      setCoffees(respCoffees.data);
      setLatestCoffee(respLatest.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCoffees();
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
            <div>
              <Coffee {...latestCoffee} />
              <CoffeeTable {...coffees} />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Main>
        <Footer>
          Made with <span>❤</span> ️by Eivind and Sondre
        </Footer>
      </MainWrapper>
    </React.StrictMode>
  );
};

export default App;
