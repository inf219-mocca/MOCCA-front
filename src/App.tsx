import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import Coffee from "./components/Coffee";
import CoffeeTable from "./components/CoffeeList";
import useInterval from "./utils/useInterval";

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

  useInterval(() => {
    getCoffees();
  }, 10000);

  return (
    <React.StrictMode>
      <main>
        <header>
          <h1>MOCCAPI</h1>
        </header>
        <div className="main">
          {!isLoading ? (
            <div>
              <Coffee {...latestCoffee} />
              <CoffeeTable {...coffees} />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <footer>
          Made with <span>❤</span> ️by Eivind and Sondre
        </footer>
      </main>
    </React.StrictMode>
  );
};

export default App;
