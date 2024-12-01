"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoOpen } from "react-icons/io5";
import Link from "next/link";

export const PriceCard = ({
  src,
  title,
  price,
  link,
}: {
  src: string;
  link: string;
  title: string;
  price: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link}
      className="h-96 bg-cover bg-center shadow-md cursor-pointer"
      style={{ backgroundImage: `url(${src})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          fontSize: 32,
          color: "white",
        }}
        whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <motion.div animate={{ scale: isHovered ? 2 : 0 }}>
          {isHovered ? <IoOpen /> : null}
        </motion.div>
        <motion.h3 animate={{ y: isHovered ? 80 : 0 }}>{title}</motion.h3>
        <motion.h3 animate={{ y: isHovered ? 80 : 0 }}>from {price}$</motion.h3>
      </motion.div>
    </Link>
  );
};
