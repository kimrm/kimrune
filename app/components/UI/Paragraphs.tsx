import React from "react";

interface ParagraphsProps {
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export default function Paragraphs({
  size = "small",
  children
}: ParagraphsProps) {
  const baseStyles = "text-neutral-300 space-y-2";
  const sizes = {
    small: "text-sm md:text-base max-w-prose mb-1",
    medium: "text-base md:text-lg max-w-1/2 mb-2",
    large: "text-lg md:text-xl mb-6"
  };
  return <div className={`${baseStyles} ${sizes[size]}`}>{children}</div>;
}
