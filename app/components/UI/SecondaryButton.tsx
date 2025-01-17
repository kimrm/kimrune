import React from "react";

export default function SecondaryButton({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-white text-black border-black border-2 px-4 py-2 rounded-3xl hover:bg-gray-200 transition-colors duration-500"
      {...rest}
    >
      {children}
    </button>
  );
}
