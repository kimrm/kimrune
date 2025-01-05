"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector("header");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header?.classList.remove("bg-opacity-30");
        header?.classList.add("bg-opacity-90");
      } else {
        header?.classList.add("bg-opacity-30");
        header?.classList.remove("bg-opacity-90");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="fixed top-0 left-0 z-50 right-0 overflow-hidden bg-[#060a12] bg-opacity-30 transition-opacity duration-500">
      <nav className="py-4 px-8 flex justify-between relative max-w-7xl mx-auto">
        <ul className="flex space-x-4 text-lg font-medium">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "bg-neutral-900" : "hover:bg-neutral-900"
              } p-2 rounded-md`}
            >
              Hjem
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`${
                pathname === "/projects"
                  ? "bg-neutral-900"
                  : "hover:bg-neutral-900"
              } p-2 rounded-md`}
            >
              Prosjekter
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                pathname === "/about"
                  ? "bg-neutral-900"
                  : "hover:bg-neutral-900"
              } p-2 rounded-md`}
            >
              Om
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact"
                  ? "bg-neutral-900"
                  : "hover:bg-neutral-900"
              } p-2 rounded-md`}
            >
              Kontakt
            </Link>
          </li>
          <li>
            <Link
              href="/cv"
              className={`${
                pathname === "/cv" ? "bg-neutral-900" : "hover:bg-neutral-900"
              } p-2 rounded-md`}
            >
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
