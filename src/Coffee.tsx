import { TableRow } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import React from "react";

interface ICoffee {
  amount: number;
  is_powered: number;
  measured_at: any;
  outages: any;
  started_brewing: any;
  temperature: number;
}

export default class Coffee extends React.Component<ICoffee> {
  constructor(props: ICoffee) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
      <TableRow>
        <TableCell component="th" scope="row">
          {this.props.amount}
        </TableCell>
        <TableCell align="right">{this.props.is_powered}</TableCell>
        <TableCell align="right">{this.props.measured_at}</TableCell>
        <TableCell align="right">
          {this.props.outages == null ? "None" : this.props.outages}
        </TableCell>
        <TableCell align="right">{this.props.started_brewing}</TableCell>
        <TableCell align="right">{this.props.temperature}</TableCell>
      </TableRow>
    );
  }
}
