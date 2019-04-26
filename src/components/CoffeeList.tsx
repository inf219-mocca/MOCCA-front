import * as React from "react";
import { Table, TableBody, TableHead, Td, Tr } from "../styles/Table";
import { duration, powerStatus, TimeField } from "../utils";
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

const CoffeeTable: React.FC<ICoffee[]> = props => {
  return (
    <Table>
      <TableHead>
        <tr>
          <Td>Amount</Td>
          <Td>Power</Td>
          <Td>Measured</Td>
          <Td>Outages</Td>
          <Td>Started brewing</Td>
          <Td>Temperature</Td>
        </tr>
      </TableHead>
      <TableBody>
        {Object.values(props).map((coffee: ICoffee) => (
          <CoffeeList {...coffee} key={coffee.id} />
        ))}
      </TableBody>
    </Table>
  );
};

export default CoffeeTable;
