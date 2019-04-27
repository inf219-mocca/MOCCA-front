import * as React from "react";

const CoffeeOff: React.FC = () => {
  return (
    <>
      <img
        src="icons/dead.svg"
        alt="Coffee brewing transitions"
        className="coffeeIcon"
      />
      <p className="coffeeStatus">:(</p>
    </>
  );
};

export default CoffeeOff;
