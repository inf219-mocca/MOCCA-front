import * as React from "react";
import { duration, powerStatus } from "../utils";
import CoffeeBrewing from "./CoffeeBrewing";

export interface ICoffee {
  id: number;
  measured_at: Date;
  temperature: number;
  amount: number;
  is_powered: number;
  brew_started: Date;
  brew_outages: Date;
}

const coffeePowerText = (isPowered: number): string => {
  const power = powerStatus(isPowered).toLowerCase();
  switch (isPowered) {
    case 0:
      return `The coffee is ${power}, oh no :(`;
    case 1:
      return `The coffee is ${power}.`;
    case 2:
      return "";
    default:
      return `Whoops...`;
  }
};

const coffeeOutageText = (brewOutages: Date): string => {
  const outage = brewOutages === null ? "None" : duration(brewOutages);
  if (outage === "None") {
    return "It's been kept hot the whole time, nice!";
  } else {
    return `The coffee has lost power for ${outage}.`;
  }
};

const Coffee: React.FC<ICoffee> = ({
  measured_at,
  amount,
  is_powered,
  brew_started,
  brew_outages
}) => {
  return (
    <section className="coffee">
      {is_powered === 2 ? <CoffeeBrewing /> : coffeePowerText(is_powered)}
      <p>
        <br />
        {is_powered > 2 ? coffeeOutageText(brew_outages) : ""}
      </p>
    </section>
  );
};

export default Coffee;
