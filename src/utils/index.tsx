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

export const timeSince = (date: any) => {
  const dur: Duration = moment.duration(date);
  return dur.seconds() <= 10 ? "None" : dur.seconds();
};

export const duration = (date: Date) => {
  return moment(date).fromNow(true);
};
