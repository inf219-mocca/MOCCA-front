import * as React from "react";
import { duration, powerStatus, TimeField } from "./Util";
import { Tr, Td } from "./styles/Table";

export interface ICoffee {
  id: number;
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
    <Tr>
      <Td>{props.amount.toPrecision(2)}</Td>
      <Td>{power}</Td>
      <Td>
        <TimeField data={props.measured_at} />
      </Td>
      <Td>{outage}</Td>
      <Td>
        <TimeField data={props.started_brewing} />
      </Td>
      <Td>{props.temperature}C</Td>
    </Tr>
  );
};

export default Coffee;
