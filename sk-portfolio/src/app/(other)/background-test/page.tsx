import { ReactNode } from "react";
import Layout from "./layout";

export default function BackgroundTest() {
  return (
    <>
      <div className="w-full h-full bg-amber-600"></div>
    </>
  );
}

BackgroundTest.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
