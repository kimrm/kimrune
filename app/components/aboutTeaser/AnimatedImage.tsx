"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function AnimatedImage() {
  return (
    <motion.div
      initial={{ rotate: -1080, opacity: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      whileInView={{ rotate: 0, opacity: 1 }}
      viewport={{ amount: 1, once: true }}
    >
      <Image
        src="/profile2.jpeg"
        width={300}
        height={300}
        alt="Bilde av Kim Rune Møller"
        className="object-cover"
      />
    </motion.div>
  );
}
