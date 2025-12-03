"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { setupBackgrounds } from "./build-background";

export const canvasConfigs = [
  { classNames: "-translate-z-[0px] scale-100", scale: 1, distance: 10 },
  { classNames: "-translate-z-[1px] scale-200", scale: 2, distance: 20 },
  { classNames: "-translate-z-[2px] scale-300", scale: 3, distance: 30 },
  { classNames: "-translate-z-[3px] scale-400", scale: 4, distance: 40 },
];

export default function BackgroundContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [size, setSize] = useState({ x: 0, y: 0, dpr: 1 });
  const canvasRefs = useRef<HTMLCanvasElement[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const containingElement = bgRef.current;
    if (!containingElement) {
      return;
    }
    function updateSize() {
      setSize({
        x: bgRef.current?.clientWidth ?? 0,
        y: bgRef.current?.clientHeight ?? 0,
        dpr: window.devicePixelRatio,
      });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [bgRef]);

  useEffect(() => {
    setupBackgrounds(canvasRefs.current, canvasConfigs);
  }, [size, canvasRefs]);

  return (
    <>
      <div
        className="w-full h-full relative inline-block overflow-y-auto overflow-x-clip"
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
        <div ref={bgRef} className="min-h-full p-10 z-1 relative">
          {children}
        </div>
      </div>
    </>
  );
}
