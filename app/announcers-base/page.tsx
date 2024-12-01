"use client";

import { ButtonGroup } from "@/components/button-group";
import { AnnouncerCard } from "@/components/cards";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const data = [
  {
    name: "Tony",
    gender: "male",
    sound: "/sounds/tony_narration.mp3",
    avatar:
      "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 75,
  },
  {
    name: "Tina",
    sound: "/sounds/sherry_narration.mp3",
    gender: "female",
    avatar:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 60,
  },
  {
    name: "Helen",
    sound: "/sounds/charlotte_narration.mp3",
    gender: "female",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 50,
  },
  {
    name: "Den",
    gender: "male",
    sound: "/sounds/gustav_narration.mp3",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 55,
  },
  {
    name: "Lara",
    gender: "female",
    sound: "/sounds/remie_book.mp3",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 80,
  },
  {
    name: "Christopher",
    gender: "male",
    sound: "/sounds/mike_narration.mp3",
    avatar:
      "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 70,
  },
  {
    name: "Jeremy",
    gender: "male",
    sound: "/sounds/tim_game.mp3",
    avatar:
      "https://images.pexels.com/photos/1073097/pexels-photo-1073097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 60,
  },
];

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string>("All");

  useEffect(() => {
    const filter = searchParams.get("filter") || "All";
    setActiveFilter(filter);
  }, [searchParams]);

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(window.location.search);
    if (filter === "All") {
      params.delete("filter");
    } else {
      params.set("filter", filter);
    }
    router.push(`?${params.toString()}`);
  };

  const filteredData = data.filter((item) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Male Voice") return item.gender === "male";
    if (activeFilter === "Female Voice") return item.gender === "female";
    return true;
  });

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-end p-10 font-bold">Announcers Base</h1>
      <ButtonGroup>
        {["All", "Male Voice", "Female Voice"].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-4 py-2 ${
              activeFilter === category
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
          <AnnouncerCard
            key={`announcer-${idx}-${item.name}`}
            avatar={item.avatar}
            gender={item.gender}
            name={item.name}
            price={item.price}
            sound={item.sound}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
