import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <h1 className="text-5xl">Contact Me</h1>
      <p className="text-lg">{"I'd love to hear from you!"}</p>
      <ul className="flex flex-col gap-10">
        <li>
          <Link
            className="inline-block h-full w-full"
            target="_blank"
            rel="noopener"
            href="mailto:shelby.kauth@gmail.com"
          >
            <Image
              src="/images/socials/icons8-dotty-email-80.png"
              alt="Email"
              width={80}
              height={80}
              className="inline-block dark:invert"
            />
            <span>shelby.kauth@gmail.com</span>
          </Link>
        </li>
        <li>
          <Link
            className="inline-block h-full w-full"
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/shelby-kauth/"
          >
            <Image
              src="/images/socials/icons8-dotty-linkedin-80.png"
              alt="LinkedIn"
              width={80}
              height={80}
              className="inline-block dark:invert"
            />
            <span>shelby-kauth</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
