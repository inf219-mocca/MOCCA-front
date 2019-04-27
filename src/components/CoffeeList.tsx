import * as React from "react";
import { timeSince, powerStatus, TimeField } from "../utils";
import { ICoffee } from "./Coffee";

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

const CoffeeTable: React.FC<ICoffee[]> = props => {
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
        {Object.values(props).map((coffee: ICoffee) => (
          <CoffeeList {...coffee} key={coffee.id} />
        ))}
      </tbody>
    </table>
  );
};

export default CoffeeTable;
