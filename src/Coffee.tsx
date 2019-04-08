import * as React from "react";
import styled from "styled-components";

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
