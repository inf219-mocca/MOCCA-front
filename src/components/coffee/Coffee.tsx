import * as React from "react";
import CoffeeBrewing from "./CoffeeBrewing";
import CoffeeHeating from "./CoffeeHeating";
import CoffeeOff from "./CoffeeOff";
import CoffeeStatus from "./CoffeeStatus";
import { useState, useEffect } from "react";
import axios from "axios";
import useInterval from "../../utils/useInterval";

export interface ICoffee {
  id: number;
  measured_at: Date;
  temperature: number;
  amount: number;
  is_powered: number;
  brew_started: Date;
  brew_outages: Date;
}

const Coffee: React.FC = () => {
  const [coffee, setCoffee] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCoffee = async () => {
    const res = await axios.get("/api/v1/coffee/now");
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
    is_powered,
    brew_started,
    brew_outages
  }: ICoffee = coffee;

  return (
    <section className="coffee">
      {is_powered === 2 && <CoffeeBrewing brewStarted={brew_started} />}
      {is_powered === 1 && (
        <CoffeeHeating amount={amount} temperature={temperature} />
      )}
      {is_powered === 0 && <CoffeeOff />}
      <CoffeeStatus
        brewStarted={brew_started}
        isPowered={is_powered}
        brewOutages={brew_outages}
      />
    </section>
  );
};

export default Coffee;
