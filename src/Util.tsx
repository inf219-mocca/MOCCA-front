import moment from "moment";
import React from "react";

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

export const TimeField = (props: any) => {
  const from = moment(props.data).fromNow();
  return <time>{from}</time>;
};

export const duration = (date: any) => {
  return moment.duration(date).humanize();
};
