import * as React from "react";
import { duration, timeSince } from "../utils";

interface ICoffeeStatus {
  brewOutages: Date;
  brewStarted: Date;
  isPowered: number;
}

const coffeeOutageText = (brewOutages: Date): string => {
  const outage = brewOutages === null ? "None" : timeSince(brewOutages);
  if (outage === "None") {
    return "without losing power";
  } else {
    return `, but has lost power for ${outage}.`;
  }
};

const CoffeeStatus: React.FC<ICoffeeStatus> = ({
  brewStarted,
  isPowered,
  brewOutages
}) => {
  return (
    <>
      {isPowered === 0 ? (
        <p className="coffeeBrewTimer">The coffee has no power, go save it!</p>
      ) : (
        <p className="coffeeBrewTimer">
          The coffee is off... The coffee has been brewing for{" "}
          {duration(brewStarted)}, {coffeeOutageText(brewOutages)}.
        </p>
      )}
    </>
  );
};

export default CoffeeStatus;
