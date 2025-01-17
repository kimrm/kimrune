import React, { PropsWithChildren } from "react";
import NextLink, { LinkProps } from "next/link";

type CustomLinkProps = LinkProps & {
  className?: string;
};

export default function Link({
  children,
  className = "",
  ...rest
}: PropsWithChildren<CustomLinkProps>) {
  return (
    <NextLink
      {...rest}
      className={`underline hover:text-neutral-300 hover:bg-neutral-900 rounded-md ${className}`}
    >
      {children}
    </NextLink>
  );
}
