import { ServiceCard } from "@/components/cards";
import React from "react";

export const ServicesBanner = () => {
  return (
    <div className="grid grid-cols-1 flex:rid-cols-2 ">
      <ServiceCard
        link="/announcers-base"
        title="Announcers Base"
        src="/images/announcer.jpg"
      />
      <ServiceCard
        link="/contacts"
        title="Sound Mastering"
        src="images/sound-mastering.jpg"
      />
    </div>
  );
};
