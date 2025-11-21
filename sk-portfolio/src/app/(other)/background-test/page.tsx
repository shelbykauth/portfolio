"use client";

import { useEffect, useRef, useState } from "react";
import Layout from "./layout";
import { setupBackgrounds } from "./build-background";

export const canvasConfigs = [
  { classNames: "-translate-z-[0px] scale-100", scale: 1, distance: 10 },
  { classNames: "-translate-z-[1px] scale-200", scale: 2, distance: 20 },
  { classNames: "-translate-z-[2px] scale-300", scale: 3, distance: 30 },
  { classNames: "-translate-z-[3px] scale-400", scale: 4, distance: 40 },
];

export default function BackgroundTest() {
  const [counter, updateCounter] = useState(0);
  const [size, updateSize] = useState({ x: 0, y: 0, dpr: 1 });
  const canvasRefs = useRef<HTMLCanvasElement[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);

  setupBackgrounds(canvasRefs.current, canvasConfigs);
  // useEffect(() => {
  //   drawBackgrounds(canvasRefs.current);
  // }, [canvasRefs, counter]);

  useEffect(() => {
    updateSize({
      x: bgRef.current?.clientWidth ?? 0,
      y: bgRef.current?.clientHeight ?? 0,
      dpr: window.devicePixelRatio,
    });
  }, []);

  console.log(size);

  return (
    <>
      <div
        className="w-full h-screen relative inline-block overflow-y-auto overflow-x-clip"
        style={{ transformStyle: "preserve-3d", perspective: "1px" }}
      >
        {canvasConfigs.map((config, index) => (
          <canvas
            key={index}
            ref={(el) => {
              if (el) {
                canvasRefs.current[index] = el;
              }
            }}
            height={size.y * size.dpr}
            width={size.x * size.dpr}
            className={`absolute ${config.classNames}`}
            style={{ width: size.x, height: size.y }}
          />
        ))}
        <div ref={bgRef} className="text-amber-50 h-[300%] p-10 z-1 relative">
          LoremIpsum
          <br></br>
          <button onClick={() => updateCounter(counter + 1)}>
            Increment Counter
          </button>
          &nbsp;- {counter}
          <br></br>
          Size: {size.x}x{size.y} @ {size.dpr}
        </div>
      </div>
    </>
  );
}

BackgroundTest.getLayout = Layout;
