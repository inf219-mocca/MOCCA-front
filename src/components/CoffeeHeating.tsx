import { useState } from "react";
import * as React from "react";

interface ICoffeeHeating {
  brewStarted: Date;
  amount: number;
}

const amountIcon = (amount: number) => {
  if (amount <= 0.33) {
    return "icons/empty.svg";
  } else if (amount >= 0.34 && amount <= 0.66) {
    return "icons/half.svg";
  } else if (amount >= 0.67) {
    return "icons/full.svg";
  }
};

const statusText = (amount: number) => {
  if (amount <= 0.33) {
    return "";
  } else if (amount >= 0.34 && amount <= 0.66) {
    return "icons/half.svg";
  } else if (amount >= 0.67) {
    return "icons/full.svg";
  }
};

const CoffeeHeating: React.FC<ICoffeeHeating> = ({ brewStarted, amount }) => {
  const icon = amountIcon(amount);
  return (
    <>
      <img src={icon} alt="Coffee amount icon" className="coffeeIcon" />
      <p className="coffeStatus">The coffee is ready, get it while its hot!</p>
    </>
  );
};

export default CoffeeHeating;
