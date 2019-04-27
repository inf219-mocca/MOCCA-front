import * as React from "react";

interface ICoffeeHeating {
  amount: number;
  temperature: number;
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
    return "nearly empty";
  } else if (amount >= 0.34 && amount <= 0.66) {
    return "half full";
  } else if (amount >= 0.67) {
    return "full";
  }
};

const flavorText = (amount: number, temperature: number) => {
  if (temperature < 25) {
    return "go make a new one";
  }

  if (amount <= 0.33 && temperature >= 45) {
    return "you better run";
  } else if (amount >= 0.34 && amount <= 0.66) {
    return "you have some time";
  } else if (amount >= 0.67) {
    return "relax";
  }
};

const heatText = (temperature: number) => {
  if (temperature >= 65) {
    return "hot";
  } else if (temperature < 65 && temperature >= 45) {
    return "warm";
  } else if (temperature < 45 && temperature >= 30) {
    return "lukewarm";
  } else {
    return "cold";
  }
};

const CoffeeHeating: React.FC<ICoffeeHeating> = ({ amount, temperature }) => {
  const icon = amountIcon(amount);
  return (
    <>
      <img src={icon} alt="Coffee amount icon" className="coffeeIcon" />
      <p className="coffeeStatus">
        It is {statusText(amount)} and {heatText(temperature)},{" "}
        {flavorText(amount, temperature)}.
      </p>
    </>
  );
};

export default CoffeeHeating;
