import React from "react";

export default function List({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc list-inside space-y-2 mb-8">{children}</ul>;
}
