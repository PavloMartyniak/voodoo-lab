"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavLink = ({
  children,
  onClick,
  href,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href: string;
}) => {
  const pathname = usePathname();
  const isActiveLink = pathname.includes(href);
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`cursor-pointer hover:underline text-gray-600 ${
        isActiveLink && "underline text-black font-semibold"
      }`}
    >
      {children}
    </Link>
  );
};
