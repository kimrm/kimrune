"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import useContactModalStore from "@/app/store/useContactModalStore";

const messages = [
  "Jeg trenger ny hjemmeside...",
  "Har problemer med en printer...",
  "Trenger hjelp med SEO...",
  "Ønsker en nettbutikk...",
  "Kan jeg integrere disse systemene?"
];

export default function QuickContact() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const openModal = useContactModalStore((state) => state.openModal);

  useEffect(() => {
    const message = messages[messageIndex];

    if (charIndex < message.length) {
      const typeMessage = setTimeout(() => {
        setCurrentMessage((prev) => prev + message[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(typeMessage);
    } else {
      const resetMessage = setTimeout(() => {
        setCharIndex(0);
        setCurrentMessage("");
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, 2000);

      return () => clearTimeout(resetMessage);
    }
  }, [charIndex, messageIndex]);

  return (
    <>
      <motion.input
        type="text"
        placeholder={currentMessage}
        className="bg-white px-4 py-2 rounded-3xl w-1/2 text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <button
        onClick={openModal}
        className="bg-black px-4 py-2 rounded-3xl hover:bg-gray-800 transition-colors duration-500"
      >
        Kontakt meg
      </button>
    </>
  );
}
