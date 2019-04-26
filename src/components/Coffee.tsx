import * as React from "react";
import ReactSVG from "react-svg";
import styled from "styled-components";
import { duration, powerStatus } from "../utils";

const CoffeeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  padding-bottom: 40px;
`;

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
      return `The coffee is ${power}, you should wait a little...`;
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
    <CoffeeBox>
      <span>
        <ReactSVG src="icons/full.svg" svgStyle={{ width: 100, height: 100 }} />
      </span>
      <p>
        {coffeePowerText(is_powered)}
        <br />
        {is_powered > 2 ? coffeeOutageText(brew_outages) : ""}
      </p>
    </CoffeeBox>
  );
};

export default Coffee;
