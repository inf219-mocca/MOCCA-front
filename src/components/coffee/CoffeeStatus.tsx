import * as React from "react";
import { duration, timeSince } from "../../utils";
import { Duration } from "moment";

interface ICoffeeStatus {
  brewOutages: Duration;
  brewStarted: Date;
  status: number;
}

const coffeeOutageText = (brewOutages: Duration): string => {
  const outage = timeSince(brewOutages);
  if (outage.asSeconds() <= 10) {
    return "without losing power";
  } else {
    return `but has been without power for ${outage.humanize()}`;
  }
};

const CoffeeStatus: React.FC<ICoffeeStatus> = ({
  brewStarted,
  status,
  brewOutages
}) => {
  let text = "";
  if (status === 0) {
    text = "The coffee has no power, go save it!";
  } else {
    text = `The coffee has been brewing for ${duration(brewStarted)}, `;
    text += `${coffeeOutageText(brewOutages)}.`;
  }
  return <p className="coffeeBrewTimer">{text}</p>;
};

export default CoffeeStatus;
