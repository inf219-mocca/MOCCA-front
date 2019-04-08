import moment, { Duration } from "moment";
import * as React from "react";

export const powerStatus = (power: number): string => {
  switch (power) {
    case 0:
      return "Off";
    case 1:
      return "Heating";
    case 2:
      return "Brewing";
    default:
      return "ERROR";
  }
};

interface IProps {
  data: Date;
}

export const TimeField: React.FC<IProps> = ({ data }) => {
  const from: string = moment(data).fromNow();
  return <time>{from}</time>;
};

export const duration = (date: any) => {
  const duration: Duration = moment.duration(date);
  return duration.seconds() <= 10 ? "None" : duration.seconds();
};
