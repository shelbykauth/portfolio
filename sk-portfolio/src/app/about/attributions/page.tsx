import Image from "next/image";
import Link from "next/link";

export default function Attributions() {
  return (
    <>
      <h1 className="text-5xl">Attributions</h1>
      <ul className="flex flex-col gap-5">
        <li className="flex gap-5">
          <Image
            className="inline-block dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={216}
            height={64}
          />{" "}
          <div>
            Built on Next.js
            <br />
            (React & Typescript)
          </div>
        </li>
        <li>
          <Image
            className="inline-block dark:invert"
            src="/socials/icons8-dotty-email-80.png"
            alt="email logo"
            width={80}
            height={80}
          />
          <Image
            className="inline-block dark:invert"
            src="/socials/icons8-dotty-github-80.png"
            alt="github logo"
            width={80}
            height={80}
          />
          <Image
            className="inline-block dark:invert"
            src="/socials/icons8-dotty-linkedin-80.png"
            alt="linkedin logo"
            width={80}
            height={80}
          />
          <Link href="https://icons8.com/icons/all--style-dotty">
            Dotty Icons by Icons8
          </Link>
        </li>
      </ul>
    </>
  );
}
