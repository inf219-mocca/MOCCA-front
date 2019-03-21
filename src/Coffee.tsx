import * as React from "react";
import { duration, powerStatus, TimeField } from "./Util";

interface ICoffee {
  amount: number;
  is_powered: number;
  measured_at: Date;
  outages: Date;
  started_brewing: Date;
  temperature: number;
}

const Coffee: React.FC<ICoffee> = props => {
  const power = powerStatus(props.is_powered);
  const outage = props.outages === null ? "None" : duration(props.outages);
  return (
    <tr>
      <td>{props.amount.toPrecision(2)}</td>
      <td>{power}</td>
      <td>
        <TimeField data={props.measured_at} />
      </td>
      <td>{outage}</td>
      <td>
        <TimeField data={props.started_brewing} />
      </td>
      <td>{props.temperature}C</td>
    </tr>
  );
};

export default Coffee;
