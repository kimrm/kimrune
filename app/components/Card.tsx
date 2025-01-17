"use client";
import { motion } from "motion/react";

interface Props {
  children: React.ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5, once: true }}
      className="bg-neutral-300 text-black border-neutral-900 border-2 rounded-md p-8 h-full hover:border-purple-500 transition-colors duration-500"
    >
      {children}
    </motion.div>
  );
}
