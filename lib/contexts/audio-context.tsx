"use client";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState } from "react";

type AudioContextType = {
  pathname: string;
  activeAudio: string | null;
  setActiveAudio: (url: string | null) => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const [activeAudio, setActiveAudio] = useState<string | null>(null);

  return (
    <AudioContext.Provider value={{ activeAudio, setActiveAudio, pathname }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioContext = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudioContext must be used within an AudioProvider");
  }
  return context;
};
