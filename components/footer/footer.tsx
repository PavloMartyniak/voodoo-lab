import React from "react";
import { NavLink } from "../routing";
import { TextField } from "../text-field";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-5 py-10 border-t-2">
      <div className="flex gap-2 items-center">
        <img
          src="https://static.thenounproject.com/png/381237-200.png"
          width={24}
          height={24}
        />
        <h1 className="font-bold text-xl">Voodoo Lab</h1>
      </div>

      <div className="gap-3 hidden lg:flex">
        <NavLink href="/portfolio">PORTFOLIO</NavLink>
        <NavLink href="/price">PRICES</NavLink>
        <NavLink href="/announcers-base">ANNOUNCERS BASE</NavLink>
        <NavLink href="/contacts">CONTACTS</NavLink>
      </div>

      <div className="lg:flex space-y-4 items-center justify-between w-full px-10">
        <TextField placeholder="Enter your email" leftButton="Contact Me" />
        <h1>© Voodoo Lab. All rights reserved.</h1>
      </div>
    </div>
  );
};
