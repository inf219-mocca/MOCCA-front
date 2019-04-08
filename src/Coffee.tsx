import * as React from "react";
import { duration, powerStatus, TimeField } from "./Util";
import { Tr, Td } from "./styles/Table";

export interface ICoffee {
  id: number;
  measured_at: Date;
  temperature: number;
  amount: number;
  is_powered: number;
  brew_started: Date;
  brew_outages: Date;
}

const Coffee: React.FC<ICoffee> = ({
  measured_at,
  temperature,
  amount,
  is_powered,
  brew_started,
  brew_outages
}) => {
  const power = powerStatus(is_powered);
  const outage = brew_outages === null ? "None" : duration(brew_outages);
  return (
    <Tr>
      <Td>{amount.toPrecision(2)}</Td>
      <Td>{power}</Td>
      <Td>
        <TimeField data={measured_at} />
      </Td>
      <Td>{outage}</Td>
      <Td>
        <TimeField data={brew_started} />
      </Td>
      <Td>{temperature}C</Td>
    </Tr>
  );
};

export default Coffee;
