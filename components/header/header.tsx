"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavLink } from "../routing";
import { motion } from "framer-motion";
import Drawer from "../drawer/drawer";

export const Header = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      animate={{
        paddingTop: isScrolled ? "0.3rem" : "1rem",
        paddingBottom: isScrolled ? "0.3rem" : "1rem",
      }}
      className="px-4 shadow-lg flex justify-between sticky top-0 bg-white z-10 items-center"
    >
      <Link
        onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)}
        href="/"
        className="flex items-center"
      >
        <motion.img
          src="https://static.thenounproject.com/png/381237-200.png"
          width={48}
          height={48}
          animate={{ rotate: isLogoHovered ? 10 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <h1 className="font-bold text-2xl">VoodooLab</h1>
      </Link>

      <div className="hidden md:flex gap-3">
        <NavLink href="/portfolio">PORTFOLIO</NavLink>
        <NavLink href="/price">PRICES</NavLink>
        <NavLink href="/announcers-base">ANNOUNCERS BASE</NavLink>
        <NavLink href="/contacts">CONTACTS</NavLink>
      </div>

      <button
        className="md:hidden p-2 text-gray-700 focus:outline-none"
        onClick={() => setIsDrawerOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        placement="left"
      >
        <div className="flex flex-col gap-4 p-4">
          <NavLink href="/portfolio" onClick={() => setIsDrawerOpen(false)}>
            PORTFOLIO
          </NavLink>
          <NavLink href="/price" onClick={() => setIsDrawerOpen(false)}>
            PRICES
          </NavLink>
          <NavLink
            href="/announcers-base"
            onClick={() => setIsDrawerOpen(false)}
          >
            ANNOUNCERS BASE
          </NavLink>
          <NavLink href="/contacts" onClick={() => setIsDrawerOpen(false)}>
            CONTACTS
          </NavLink>
        </div>
      </Drawer>
    </motion.div>
  );
};
