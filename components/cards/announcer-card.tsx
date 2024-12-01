"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAudio } from "@/lib/hooks/useAudio";
import { FaPause, FaPlay } from "react-icons/fa";
import { useDisclosure } from "@/lib/hooks/useDisclosure";
import { AnnouncerModal } from "../announcer-modal/announcer-modal";

export const AnnouncerCard = ({
  name,
  sound,
  avatar,
  price,
}: {
  name: string;
  gender?: string;
  sound: string;
  avatar: string;
  price: number;
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [playing, toggle] = useAudio(sound);

  useEffect(() => {
    setIsHovered(false);
  }, [playing]);

  return (
    <div
      className="h-72 bg-cover bg-center shadow-md cursor-pointer"
      style={{ backgroundImage: `url(${avatar})` }}
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
        <motion.div animate={{ scale: isHovered ? 1 : 0, y: -30, x: -150 }}>
          {isHovered ? (
            <motion.button
              onClick={onOpen}
              whileHover={{ backgroundColor: "gray" }}
              className="px-2 bg-slate-400 bg-opacity-75"
            >
              Hire
            </motion.button>
          ) : null}
        </motion.div>

        <motion.div animate={{ scale: isHovered ? 2 : 0, y: 20 }}>
          <button onClick={toggle}>{playing ? <FaPause /> : <FaPlay />}</button>
        </motion.div>

        <motion.h3 animate={{ y: isHovered ? 60 : 0, x: isHovered ? 120 : 0 }}>
          {name}
        </motion.h3>
        <motion.h3 animate={{ y: isHovered ? 40 : 0, x: isHovered ? 120 : 0 }}>
          {price}$/min
        </motion.h3>
      </motion.div>

      <AnnouncerModal
        announcerName={name}
        announcerAvatar={avatar}
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
};
