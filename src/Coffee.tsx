import * as React from "react";
import styled from "styled-components";
import { powerStatus, duration } from "./Util";

const CoffeeBox = styled.div`
  background-color: black;
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

const Coffee: React.FC<ICoffee> = ({
  measured_at,
  amount,
  is_powered,
  brew_started,
  brew_outages
}) => {
  let power = powerStatus(is_powered);
  const outage = brew_outages === null ? "None" : duration(brew_outages);
  return (
    <CoffeeBox>
      <p>The coffee is {power.toLowerCase}!</p>
    </CoffeeBox>
  );
};

export default Coffee;
