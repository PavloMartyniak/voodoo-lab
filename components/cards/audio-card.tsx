"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAudio } from "@/lib/hooks/useAudio";
import { FaPause, FaPlay } from "react-icons/fa";

export const AudioCard = ({
  src,
  title,
  audioSrc,
}: {
  src: string;
  title: string;
  audioSrc: string;
}) => {
  const [playing, toggle] = useAudio(audioSrc);
  const [isHovered, setIsHovered] = useState<boolean>(playing);

  useEffect(() => {
    setIsHovered(false);
  }, [playing]);

  return (
    <div
      className="h-72 bg-cover bg-center shadow-md cursor-pointer"
      style={{ backgroundImage: `url(${src})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => !playing && setIsHovered(false)}
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
          <button onClick={toggle}>{playing ? <FaPause /> : <FaPlay />}</button>
        </motion.div>
        <motion.h3 animate={{ y: isHovered ? 80 : 0 }}>{title}</motion.h3>
      </motion.div>
    </div>
  );
};
