"use client";
import React, { useState } from "react";
import LaravelIcon from "../components/stackIcons/LaravelIcon";
import ReactIcon from "../components/stackIcons/ReactIcon";
import LaravelStack from "./LaravelStack";
import ReactStack from "./ReactStack";
import Heading from "../components/UI/Heading";
import Paragraphs from "../components/UI/Paragraphs";

export default function AboutStack() {
  const [activeStack, setActiveStack] = useState("laravel");
  return (
    <div className="md:max-w-5xl mx-auto h-full">
      <Heading type="h1">Vår teknologiplattform</Heading>
      <Paragraphs size="large">
        <p>
          Laravel og React er en moderne, skalerbar og fremtidsrettet
          teknologi-stack som gir en rask og sikker utviklingsprosess. Denne
          kombinasjonen er ideell for alt fra enkle bedriftsnettsteder til
          avanserte webapplikasjoner og SaaS-løsninger. Ved å velge Laravel og
          React får du en solid teknologiplattform som gir en sømløs og effektiv
          opplevelse for både utviklere og brukere.
        </p>
      </Paragraphs>
      <div className="flex flex-col md:flex-row h-full bg-slate-900 rounded-sm">
        <div className="bg-white rounded-md flex flex-row md:flex-col">
          <button
            onClick={() => setActiveStack("laravel")}
            className={`flex-1 grayscale-0  border-b ${
              activeStack === "laravel"
                ? "bg-neutral-100 text-neutral-900"
                : "grayscale bg-neutral-300 text-neutral-600 hover:bg-neutral-200"
            } rounded-tl md:rounded-t border-blue-600 p-4 w-full flex items-center justify-center `}
          >
            <LaravelIcon
              className={`${
                activeStack === "laravel" && "scale-105"
              } hover:scale-105 transition-transform ease-out duration-150 `}
            />
          </button>
          <button
            onClick={() => setActiveStack("react")}
            className={`flex-1 grayscale-0  border-b ${
              activeStack === "react"
                ? "bg-neutral-100 text-neutral-900"
                : "grayscale bg-neutral-300 text-neutral-600 hover:bg-neutral-200"
            } rounded-tr md:rounded-b border-blue-600 p-4 w-full flex items-center justify-center `}
          >
            <ReactIcon
              className={`${
                activeStack === "react" && "scale-105"
              } hover:scale-105 transition-transform ease-out duration-150 `}
            />
          </button>
        </div>
        <div className="py-8 px-4 md:px-12 h-full">
          {activeStack === "laravel" && <LaravelStack />}
          {activeStack === "react" && <ReactStack />}
        </div>
      </div>
    </div>
  );
}
