import React from "react";
import Heading from "../components/UI/Heading";
import Paragraphs from "../components/UI/Paragraphs";

export default function LaravelStack() {
  return (
    <>
      <Heading type="h2">Backendutvikling med Laravel</Heading>
      <Paragraphs size="large">
        <p>
          Laravel er et av de mest populære PHP-rammeverkene for webutvikling,
          og det er ikke uten grunn.
        </p>
      </Paragraphs>
      <Heading type="h4">Rask utvikling</Heading>
      <Paragraphs size="medium">
        <p>
          Laravel har et omfattende sett med verktøy og ferdige løsninger som
          gjør utviklingen raskere og mer effektiv.
        </p>
      </Paragraphs>
      <Heading type="h4">Skalerbar og sikker</Heading>
      <Paragraphs size="medium">
        <p>
          Med innebygde sikkerhetsfunksjoner som autentisering, autorisasjon og
          beskyttelse mot vanlige angrep (f.eks. SQL Injection og Cross-Site
          Scripting) er Laravel en trygg plattform for utvikling.
        </p>
      </Paragraphs>
      <Heading type="h4">API-vennlig</Heading>
      <Paragraphs size="medium">
        <p>
          Laravel er perfekt for å bygge RESTful API-er, som gjør det enkelt å
          kommunisere med frontend-applikasjoner.
        </p>
      </Paragraphs>
      <Heading type="h4">Modulær og vedlikeholdbar</Heading>
      <Paragraphs size="medium">
        <p>
          Laravel følger en ren kodearkitektur, som gjør det enklere å
          vedlikeholde og videreutvikle løsninger over tid.
        </p>
      </Paragraphs>
    </>
  );
}
