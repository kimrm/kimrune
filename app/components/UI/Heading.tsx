import React from "react";

interface HeadingProps {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

export default function Heading({ type = "h1", children }: HeadingProps) {
  const baseStyles = "font-bold text-neutral-300";
  const sizes = {
    h1: "text-3xl md:text-4xl mb-2",
    h2: "text-2xl md:text-3xl mb-2",
    h3: "text-xl md:text-2xl mb-2",
    h4: "text-lg md:text-xl mb-1",
    h5: "text-base md:text-lg",
    h6: "text-sm md:text-base"
  };

  const Tag = type;

  return <Tag className={`${baseStyles} ${sizes[type]}`}>{children}</Tag>;
}
