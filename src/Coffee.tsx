import { TableRow } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import React from "react";
import { duration, powerStatus, TimeField } from "./Util";

interface ICoffee {
  amount: number;
  is_powered: number;
  measured_at: Date;
  outages: Date;
  started_brewing: Date;
  temperature: number;
}

export default class Coffee extends React.Component<ICoffee> {
  constructor(props: ICoffee) {
    super(props);
  }

  public render(): React.ReactNode {
    const power = powerStatus(this.props.is_powered);
    const outage =
      this.props.outages === null ? "None" : duration(this.props.outages);
    return (
      <TableRow>
        <TableCell align="right">{this.props.amount}</TableCell>
        <TableCell align="right">{power}</TableCell>
        <TableCell align="right">
          <TimeField data={this.props.measured_at} />
        </TableCell>
        <TableCell align="right">{outage}</TableCell>
        <TableCell align="right">
          <TimeField data={this.props.started_brewing} />
        </TableCell>
        <TableCell align="right">{this.props.temperature}C</TableCell>
      </TableRow>
    );
  }
}
