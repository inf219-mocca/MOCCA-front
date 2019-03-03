import React from "react";
import { TableRow } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";

const Coffee = (props: any) => {
  const {
    amount,
    is_powered,
    measured_at,
    outages,
    started_brewing,
    temperature
  } = props.data;
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {amount}
      </TableCell>
      <TableCell align="right">{is_powered}</TableCell>
      <TableCell align="right">{measured_at}</TableCell>
      <TableCell align="right">{outages == null ? "None" : outages}</TableCell>
      <TableCell align="right">{started_brewing}</TableCell>
      <TableCell align="right">{temperature}</TableCell>
    </TableRow>
  );
};

export default Coffee;
