import { CanvasHTMLAttributes, useRef } from "react";

export default function ReactCanvas(
  props: CanvasHTMLAttributes<HTMLCanvasElement>
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current;
  const context = canvas?.getContext("2d") ?? null;

  return (
    <>
      <canvas ref={canvasRef} {...props} />
    </>
  );
}
