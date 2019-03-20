import moment from "moment";
import * as React from "react";

export const powerStatus = (power: number) => {
  switch (power) {
    case 0:
      return "Brewing";
    case 1:
      return "Heating";
    case 2:
      return "Off";
    default:
      return "ERROR";
  }
};

interface IProps {
  data: Date;
}

export const TimeField: React.FC<IProps> = props => {
  const from: string = moment(props.data).fromNow();
  return <time>{from}</time>;
};

export const duration = (date: any) => {
  return moment.duration(date).humanize();
};
