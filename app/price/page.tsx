"use client";

import { PriceCard } from "@/components/cards";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-end p-10 font-bold">Prices</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2  mx-10 gap-4">
        <PriceCard
          src="/images/announcer_2.jpg"
          link="/announcers-base"
          title="Announce Text"
          price={50}
        />
        <PriceCard
          src="/images/sound-mastering_2.jpg"
          link="/contacts"
          title="Sound Mastering"
          price={80}
        />
      </div>
    </div>
  );
};

export default page;
