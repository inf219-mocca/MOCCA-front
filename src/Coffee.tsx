import * as React from "react";
import styled from "styled-components";
import { powerStatus, duration } from "./Util";

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

const coffeePowerText = (is_powered: number): string => {
  let power = powerStatus(is_powered).toLowerCase();
  switch (is_powered) {
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

const coffeeOutageText = (brew_outages: Date): string => {
  const outage = brew_outages === null ? "None" : duration(brew_outages);
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
      <p>
        {coffeePowerText(is_powered)}
        <br />
        {is_powered > 2 ? coffeeOutageText(brew_outages) : ""}
      </p>
    </CoffeeBox>
  );
};

export default Coffee;
