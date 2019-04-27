import { useState } from "react";
import * as React from "react";
import useInterval from "../utils/useInterval";

const CoffeeBrewing: React.FC = () => {
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
        style={{ width: 100, height: 100 }}
      />
      <p>The coffee is brewing, just hang on a little!</p>
    </>
  );
};

export default CoffeeBrewing;
