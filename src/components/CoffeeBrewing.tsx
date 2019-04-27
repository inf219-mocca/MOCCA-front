import { useState } from "react";
import * as React from "react";
import useInterval from "../utils/useInterval";
import { duration } from "../utils";

interface ICoffeeBrew {
  brewStarted: Date;
}

const CoffeeBrewing: React.FC<ICoffeeBrew> = ({ brewStarted }) => {
  const [image, setImage] = useState("icons/empty.svg");
  const [id, setID] = useState(0);
  const images = ["icons/empty.svg", "icons/half.svg", "icons/full.svg"];

  useInterval(() => {
    setID(id + 1);
    setImage(images[id % images.length]);
  }, 1000);

  return (
    <>
      <img
        src={image}
        alt="Coffee brewing transitions"
        className="coffeeIcon"
      />
      <p>It's nearly done, just hang on a little!</p>
    </>
  );
};

export default CoffeeBrewing;
