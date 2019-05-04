import * as React from "react";
import CoffeeBrewing from "./CoffeeBrewing";
import CoffeeHeating from "./CoffeeHeating";
import CoffeeOff from "./CoffeeOff";
import CoffeeStatus from "./CoffeeStatus";
import { useState, useEffect } from "react";
import axios from "axios";
import useInterval from "../../utils/useInterval";
import { Duration } from "moment";

export interface ICoffee {
  id: number;
  measured_at: Date;
  temperature: number;
  amount: number;
  status: number;
  brew_started: Date;
  brew_outages: Duration;
}

const Coffee: React.FC = () => {
  const [coffee, setCoffee] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCoffee = async () => {
    const res = await axios
      .create({ baseURL: "http://localhost:8000" })
      .get("/api/v1/coffee/now");
    try {
      setCoffee(res.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCoffee();
  }, []);

  useInterval(() => {
    getCoffee();
  }, 10000);

  if (error !== null) {
    return <p>There was an error, try again later...</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const {
    temperature,
    amount,
    status,
    brew_started: brewStarted,
    brew_outages: brewOutages
  }: ICoffee = coffee;

  return (
    <section className="coffee">
      {status === 2 && <CoffeeBrewing brewStarted={brewStarted} />}
      {status === 1 && (
        <CoffeeHeating amount={amount} temperature={temperature} />
      )}
      {status === 0 && <CoffeeOff />}
      <CoffeeStatus
        brewStarted={brewStarted}
        status={status}
        brewOutages={brewOutages}
      />
    </section>
  );
};

export default Coffee;
