import React from "react";
import Heading from "../components/UI/Heading";
import Paragraphs from "../components/UI/Paragraphs";

export default function ReactStack() {
  return (
    <>
      <Heading type="h2">Frontendutvikling med React</Heading>
      <Paragraphs size="large">
        <p>
          React er en av de mest brukte JavaScript-bibliotekene for
          frontend-utvikling, og gir en rekke fordeler.
        </p>
      </Paragraphs>
      <Heading type="h4">Rask og responsiv brukeropplevelse</Heading>
      <Paragraphs size="medium">
        <p>
          Reacts virtuelle DOM gir optimal ytelse og sørger for en sømløs
          brukeropplevelse.
        </p>
      </Paragraphs>
      <Heading type="h4">Komponentbasert arkitektur</Heading>
      <Paragraphs size="medium">
        <p>
          Med gjenbrukbare komponenter blir utviklingen mer effektiv og
          vedlikeholdbar.
        </p>
      </Paragraphs>
      <Heading type="h4">Sterk økosystem og støtte</Heading>
      <Paragraphs size="medium">
        <p>
          React har en enormt aktiv utviklerbase og en mengde ferdige
          biblioteker som gjør utviklingen raskere.
        </p>
      </Paragraphs>
      <Heading type="h4">SEO-vennlig</Heading>
      <Paragraphs size="medium">
        <p>
          Når kombinert med server-side rendering (f.eks. Next.js), kan
          React-applikasjoner bli optimalisert for søkemotorer.
        </p>
      </Paragraphs>
    </>
  );
}
