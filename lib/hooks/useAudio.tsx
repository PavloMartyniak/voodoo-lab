import { useEffect, useState } from "react";
import { useAudioContext } from "../contexts/audio-context";
import { useSearchParams } from "next/navigation";

export const useAudio = (url: string): [boolean, () => void] => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null); // State to store audio
  const [playing, setPlaying] = useState(false);
  const { activeAudio, setActiveAudio, pathname } = useAudioContext();
  const searchParams = useSearchParams();

  // Initialize Audio only in client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const newAudio = new Audio(url || "");
      setAudio(newAudio);

      // Cleanup audio when the component unmounts or URL changes
      return () => {
        newAudio.pause();
        setActiveAudio(null);
      };
    }
  }, [url, setActiveAudio]);

  const toggle = () => {
    if (!audio) return; // Make sure audio is initialized

    if (playing) {
      audio.pause();
      setPlaying(false);
      setActiveAudio(null);
    } else {
      if (activeAudio && activeAudio !== url) {
        setActiveAudio(null);
      }
      audio.play();
      setPlaying(true);
      setActiveAudio(url);
    }
  };

  useEffect(() => {
    if (audio && activeAudio !== url && playing) {
      audio.pause();
      setPlaying(false);
    }
  }, [activeAudio, url, playing, audio]);

  useEffect(() => {
    if (audio) {
      const handleEnded = () => {
        setPlaying(false);
        setActiveAudio(null);
      };

      audio.addEventListener("ended", handleEnded);
      return () => {
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, [audio, setActiveAudio]);

  useEffect(() => {
    if (pathname && audio) {
      audio.pause();
      setPlaying(false);
      setActiveAudio(null);
    }
  }, [pathname, searchParams, audio, setActiveAudio]);

  return [playing, toggle];
};
