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
    return `, but lost power for ${outage.humanize()}`;
  }
};

const CoffeeStatus: React.FC<ICoffeeStatus> = ({
  brewStarted,
  status,
  brewOutages
}) => {
  return (
    <>
      {status === 0 ? (
        <p className="coffeeBrewTimer">The coffee has no power, go save it!</p>
      ) : (
        <p className="coffeeBrewTimer">
          The coffee has been brewing for {duration(brewStarted)},{" "}
          {coffeeOutageText(brewOutages)}.
        </p>
      )}
    </>
  );
};

export default CoffeeStatus;
