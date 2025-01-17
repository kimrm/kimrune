import React from "react";

export default function PrimaryButton({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-black text-white disabled:text-neutral-400 px-4 py-2 rounded-3xl hover:bg-gray-800 transition-colors duration-500 disabled:bg-gray-700 disabled:hover:bg-gray-700"
      {...rest}
    >
      {children}
    </button>
  );
}
