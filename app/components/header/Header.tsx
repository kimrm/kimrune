"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
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
      {isOpen && (
        <div
          role="menu"
          className="flex justify-between relative max-w-7xl mx-auto bg-slate-500 bg-opacity-30 h-screen"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex items-center justify-center bg-slate-900 w-full">
            <ul className="flex flex-col space-y-1 w-1/2 text-2xl">
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/"
                  className={`${
                    pathname === "/" ? "bg-neutral-900" : "hover:bg-neutral-400"
                  } p-2 rounded-md text-2xl block logo`}
                >
                  Kodello
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/projects"
                  className={`${
                    pathname === "/projects" || pathname.includes("/projects/")
                      ? "bg-neutral-900"
                      : "hover:bg-slate-800"
                  } p-2 rounded-md block`}
                >
                  Prosjekter
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/about"
                  className={`${
                    pathname === "/about"
                      ? "bg-neutral-900"
                      : "hover:bg-slate-800"
                  } p-2 rounded-md block`}
                >
                  Om
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/contact"
                  className={`${
                    pathname === "/contact"
                      ? "bg-neutral-900"
                      : "hover:bg-slate-800"
                  } p-2 rounded-md block`}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      <nav className="py-4 px-8 flex justify-between relative max-w-7xl mx-auto">
        <ul className="flex space-x-4 text-lg font-medium">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "bg-neutral-900" : "hover:bg-neutral-900"
              } p-2 rounded-md text-xl2 logo`}
            >
              Kodello
            </Link>
          </li>
          <li className="md:hidden items-center justify-center flex">
            <button className="p-0" onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </li>
          <li className="hidden md:block">
            <Link
              href="/projects"
              className={`${
                pathname === "/projects" || pathname.includes("/projects/")
                  ? "bg-neutral-900"
                  : "hover:bg-neutral-900"
              } p-2 rounded-md`}
            >
              Prosjekter
            </Link>
          </li>
          <li className="hidden md:block">
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
          <li className="hidden md:block">
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
        </ul>
      </nav>
    </header>
  );
}
