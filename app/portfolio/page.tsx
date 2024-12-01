"use client";
import { ButtonGroup } from "@/components/button-group";
import { AudioCard } from "@/components/cards";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const data = [
  {
    audioSrc: "sounds/tim_documentary.mp3",
    title: "Last Forest",
    src: "/heroes/tim_documentary.jpg",
    category: "Movies",
  },
  {
    audioSrc: "sounds/mike_game.mp3",
    title: "Spacer",
    src: "/heroes/mike_game.jpg",
    category: "Games",
  },
  {
    audioSrc: "sounds/charlotte_commercial.mp3",
    title: "Commercial Speech",
    src: "/heroes/charlotte_commercial.jpg",
    category: "Commercial",
  },
  {
    audioSrc: "sounds/jessica_documentary.mp3",
    title: "Alaska",
    src: "/heroes/jessica_documentary.jpg",
    category: "Movies",
  },
  {
    audioSrc: "sounds/remie_game.mp3",
    title: "Remie",
    src: "/heroes/remie_game.jpg",
    category: "Games",
  },
  {
    audioSrc: "sounds/remie_book.mp3",
    title: "Dark Season",
    src: "/heroes/remie_book.jpg",
    category: "Books",
  },
  {
    audioSrc: "sounds/gustav_documentary.mp3",
    title: "Journey",
    src: "/heroes/gustav_documentary.jpg",
    category: "Movies",
  },
  {
    audioSrc: "sounds/jessica_commercial.mp3",
    title: "Advertising narration",
    src: "/heroes/jessica_commercial.jpg",
    category: "Commercial",
  },
  {
    audioSrc: "sounds/mike_commercial.mp3",
    title: "Shopping",
    src: "/heroes/mike_commercial.jpg",
    category: "Commercial",
  },
  {
    audioSrc: "sounds/tim_book.mp3",
    title: "Golden ALP",
    src: "/heroes/tim_book.jpg",
    category: "Books",
  },
  {
    audioSrc: "sounds/tim_game.mp3",
    title: "Druid",
    src: "/heroes/tim_game.jpg",
    category: "Games",
  },
  {
    audioSrc: "sounds/tony_game.mp3",
    title: "Ridik",
    src: "/heroes/tony_game.jpg",
    category: "Games",
  },
  {
    audioSrc: "sounds/tony_commercial.mp3",
    title: "Future is Near",
    src: "/heroes/tony_commercial.jpg",
    category: "Commercial",
  },
  {
    audioSrc: "sounds/gustav_game.mp3",
    title: "Tracer Novik",
    src: "/heroes/gustav_game.jpg",
    category: "Games",
  },
];
const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    const category = searchParams.get("category") || "All";
    setActiveCategory(category);
  }, [searchParams]);

  const handleFilter = (category: string) => {
    const params = new URLSearchParams(window.location.search);
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`?${params.toString()}`);
  };

  const filteredData =
    activeCategory === "All"
      ? data
      : data.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-end p-10 font-bold">Portfolio</h1>
      <ButtonGroup>
        {["All", "Games", "Movies", "Books", "Commercial"].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-4 py-2 ${
              activeCategory === category
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </ButtonGroup>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item, idx) => (
          <AudioCard
            key={`audio-${idx}-${item.title}`}
            audioSrc={item.audioSrc}
            title={item.title}
            src={item.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
