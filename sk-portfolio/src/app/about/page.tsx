import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <h1 className="text-5xl">About Me</h1>
      <h2 className="text-4xl">Personal</h2>
      <p className="text-lg">
        I live an breathe code, and tend to make a habit of 
      <h2 className="text-4xl">Work History</h2>
      <p className="text-lg">
        {`
        Programming runs through my veins. I sat with my mother as she got her
        online degree in Web Design, and I worked with her as I grew up. Two
        decades later, I'm a full-stack software engineer with a passion for
        getting computers to act in a reliable, repeatable way (aka:
        programming).
        `}
      </p>
      <p className="text-lg">
        {`
        From 2018 to 2025, I worked at Cynerge Consulting, where I upgraded,
        maintained, and built new web applications for the US Forest Service.
        Angular, Simplr, Vue, Java, .NET, Node.js, SQL Server, Postgres,
        MongoDB, AWS, and Jenkins were just some of the technologies I used. I
        led development efforts for the CIAO project, an
        Angular/Node.js/Postgres application hosted in Docker Containers. I
        wrote the Jenkins script to deploy to Kubernetes. When CIAO was greenlit
        for Enterprise-level expansion, I helped lead a team of 3 main and 4
        drop-in developers to enable multi-tenancy and add security layers for
        public-facing access. The transition from Kubernetes to AWS ECS was
        seamless.
      `}
      </p>
      <p className="text-lg">
        {`I'm a software engineer with a passion for programming and a love of learning. I graduated from the University of Minnesota with a Bachelor's degree in Computer Science in 2013. Since then, I've worked in a variety of roles and industries, always striving to improve my skills and knowledge.`}
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
