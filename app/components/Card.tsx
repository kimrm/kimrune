"use client";
import { motion } from "motion/react";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  children: React.ReactNode;
}

export default function Card({ title, image, children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5, once: true }}
      className="bg-neutral-300 text-black border-neutral-900 border rounded-md p-8"
    >
      <Image
        src={`/${image}`}
        width={400}
        height={200}
        alt="knpsenja.no"
        className="mb-4 w-full h-52 object-cover"
        loading="lazy"
      />
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      {children}
    </motion.div>
  );
}
