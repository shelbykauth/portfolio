"use client";

import { useState } from "react";
import Layout from "./layout";
import BackgroundContainer from "@/app/background-container/background-container";

export const canvasConfigs = [
  { classNames: "-translate-z-[0px] scale-100", scale: 1, distance: 10 },
  { classNames: "-translate-z-[1px] scale-200", scale: 2, distance: 20 },
  { classNames: "-translate-z-[2px] scale-300", scale: 3, distance: 30 },
  { classNames: "-translate-z-[3px] scale-400", scale: 4, distance: 40 },
];

export default function BackgroundTest() {
  const [counter, updateCounter] = useState(0);
  // const [size, updateSize] = useState({ x: 0, y: 0, dpr: 1 });

  return (
    <>
      <BackgroundContainer>
          LoremIpsum
          <br></br>
          <button onClick={() => updateCounter(counter + 1)}>
            Increment Counter
          </button>
          &nbsp;- {counter}
          <br></br>
          {/* Size: {size.x}x{size.y} @ {size.dpr} */}
      </BackgroundContainer>
    </>
  );
}

BackgroundTest.getLayout = Layout;
