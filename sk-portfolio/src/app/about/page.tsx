import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <h1 className="text-5xl">About Me</h1>
      <p className="text-lg">
        Programming runs through my veins.
        <Link
          className="underline inline-block mx-1"
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/mariekauth/"
        >
          (Ask Marie Kauth!)
        </Link>
        {`I've spent the better part of 2 decades learning and honing my craft as
        a software engineer. With JavaScript as my mother tongue, I've explored
        dozens of languages and frameworks. What I value most highly in
        applications includes Data Integrity, Security, Accessibility, and
        Usability. What I value as a person includes Honesty, the other kind of
        Integrity, and Compassion.`}
      </p>
      <p className="text-lg">(Insert more talking points here)</p>
      <p className="text-lg">
        {`In my free time, I enjoy Minecraft, CodinGame, playing a dozen different
        musical instruments (badly), D&D, writing fantasy stories, knitting, and
        more programming. Sometimes, I even combine hobbies, such as my goal of
        using Minecraft's Create mod to build a pipe organ, controlled by a
        ComputerCraft program that reads MIDI files and live input. Besides
        Minecraft, my favorite video games include`}
        <Link
          className="underline inline-block mx-1"
          target="_blank"
          rel="noopener"
          href="https://www.mobiusdigitalgames.com/outer-wilds.html"
        >
          Outer Wilds
        </Link>
        and
        <Link
          className="underline inline-block mx-1"
          target="_blank"
          rel="noopener"
          href="https://www.hollowknight.com/"
        >
          Hollow Knight
        </Link>
      </p>
    </>
  );
}
