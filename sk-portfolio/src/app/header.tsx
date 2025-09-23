"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  { href: "/", title: "Home" },
  { href: "/projects", title: "Projects" },
  { href: "/experience", title: "Experience" },
  { href: "/about", title: "About" },
  { href: "/contact", title: "Contact" },
];

export function HeaderLink({ href, title }: { href: string; title: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
      <Link className={isActive ? "underline" : ""} href={href}>
        {title}
      </Link>
    </li>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex gap-6 flex-wrap items-end p-6 bg-black">
      <h1 className="text-2xl font-bold">
        Shelby Kauth | <span className="title">Software Engineer</span>
      </h1>
      <nav>
        <ul className="flex gap-4">
          <HeaderLink href="/" title="Home" />
          <HeaderLink href="/projects" title="Projects" />
          <HeaderLink href="/experience" title="Experience" />
          <HeaderLink href="/about" title="About" />
          <HeaderLink href="/contact" title="Contact" />
        </ul>
      </nav>
    </header>
  );
}
