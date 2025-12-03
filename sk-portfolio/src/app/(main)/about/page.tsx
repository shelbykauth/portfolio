import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="p-6 bg-[background]/80 flex flex-col gap-[32px] row-start-2 items-center sm:items-start border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <p className="text-5xl px-2">Clean Code</p>
        <p className="text-5xl px-2">Make It Work</p>
        <p className="text-5xl px-2">Catch the bugs before the users do.</p>
        <p className="text-5xl px-2">Simple. Secure. Efficient. Bug-Free.</p>
      </div>
    </>
  );
}
