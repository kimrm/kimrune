"use client";
import { motion } from "motion/react";
import LaravelIcon from "./LaravelIcon";
import MySqlIcon from "./MySqlIcon";
import ReactIcon from "./ReactIcon";
import TypeScriptIcon from "./TypeScriptIcon";
import TailwindIcon from "./TailwindIcon";

export default function StackIcons() {
  const icons = [
    <TypeScriptIcon key={0} className="w-6 h-6 md:w-12 md:h-12" />,
    <ReactIcon key={1} className="w-6 h-6 md:w-12 md:h-12" />,
    <TailwindIcon key={2} className="w-6 h-6 md:w-12 md:h-12" />,
    <LaravelIcon key={3} className="w-6 h-6 md:w-12 md:h-12" />,
    <MySqlIcon key={4} className="w-6 h-6 md:w-12 md:h-12" />
  ];

  return (
    <motion.div
      className="flex w-full md:space-x-24 md:px-8 justify-between md:max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.5 }}
    >
      {icons}
    </motion.div>
  );
}
