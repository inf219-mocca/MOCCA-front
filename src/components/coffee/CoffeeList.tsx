import * as React from "react";
import { timeSince, powerStatus, TimeField } from "../../utils";
import { ICoffee } from "./Coffee";
import { useState, useEffect } from "react";
import axios from "axios";
import useInterval from "../../utils/useInterval";

const CoffeeList: React.FC<ICoffee> = ({
  measured_at,
  temperature,
  amount,
  is_powered,
  brew_started,
  brew_outages
}) => {
  const power = powerStatus(is_powered);
  const outage = brew_outages === null ? "None" : timeSince(brew_outages);
  return (
    <tr>
      <td>{amount.toPrecision(2)}</td>
      <td>{power}</td>
      <td>
        <TimeField data={measured_at} />
      </td>
      <td>{outage}</td>
      <td>
        <TimeField data={brew_started} />
      </td>
      <td>{temperature}C</td>
    </tr>
  );
};

const CoffeeTable: React.FC = () => {
  const [coffeeList, setCoffees] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCoffees = async () => {
    const res = await axios.get("/api/v1/coffee/");
    try {
      setCoffees(res.data);
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

  if (error !== null) {
    return <p>There was an error, try again later...</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(coffeeList);

  return (
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
        {coffeeList.map((coffee: ICoffee) => (
          <CoffeeList {...coffee} key={coffee.id} />
        ))}
      </tbody>
    </table>
  );
};

export default CoffeeTable;
