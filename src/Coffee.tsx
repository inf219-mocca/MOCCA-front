import { TableRow } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
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
    <TableRow>
      <TableCell align="right">{props.amount}</TableCell>
      <TableCell align="right">{power}</TableCell>
      <TableCell align="right">
        <TimeField data={props.measured_at} />
      </TableCell>
      <TableCell align="right">{outage}</TableCell>
      <TableCell align="right">
        <TimeField data={props.started_brewing} />
      </TableCell>
      <TableCell align="right">{props.temperature}C</TableCell>
    </TableRow>
  );
};

export default Coffee;
