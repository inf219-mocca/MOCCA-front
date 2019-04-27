import * as React from "react";
import CoffeeBrewing from "./CoffeeBrewing";
import CoffeeHeating from "./CoffeeHeating";
import CoffeeOff from "./CoffeeOff";
import CoffeeStatus from "./CoffeeStatus";

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
  brew_outages,
  temperature
}) => {
  return (
    <section className="coffee">
      {is_powered === 2 && <CoffeeBrewing brewStarted={brew_started} />}
      {is_powered === 1 && (
        <CoffeeHeating amount={amount} temperature={temperature} />
      )}
      {is_powered === 0 && <CoffeeOff />}
      <CoffeeStatus
        brewStarted={brew_started}
        isPowered={is_powered}
        brewOutages={brew_outages}
      />
    </section>
  );
};

export default Coffee;
