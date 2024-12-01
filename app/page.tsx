"use client";
import { Accordion } from "@/components/accordion";
import {
  CustomersBanner,
  ServicesBanner,
  VideoBanner,
} from "@/components/banners";

export default function Home() {
  const items = [
    {
      title: "What are we doing?",
      content:
        "We are a creative team that is always full of energy and creative ideas. We create advertisements, clips, feature films and documentaries, animations and interactive media objects.",
    },
    {
      title: "What do we offer?",
      content:
        "Our team provides a wide range of services: from professional photo and video shooting to the creation of commercials, clips, films.",
    },
    {
      title: "Why choose us?",
      content:
        "For us there is no concept of «impracticable ideas», we can realize any, suggest how best, and inspire you with our options. We do our work efficiently and on time!",
    },
  ];
  return (
    <div>
      <VideoBanner
        title="Voodoo Lab Studio"
        subtitle="VOODOO LAB is an international audio production studio. We have
          creative and production teams, professional equipment and a recording
          studio, and most importantly, a announcers database. We create audio
          content for integrated brand promotion including advertising and
          promotional videos, audio ads, content for social media, etc."
        src="/footages/voice_over_station.mp4"
      />

      <h1 className="text-4xl text-end p-10 font-bold">Our Services</h1>
      <ServicesBanner />

      <h1 className="text-4xl text-start p-10 font-bold">
        Frequently Answered Questions
      </h1>
      <div className="px-10">
        {items.map((item, index) => (
          <Accordion key={index} item={item} index={index} />
        ))}
      </div>

      <div className="flex items-end text-lg flex-col gap-4 p-10">
        <h1 className=" w-[70%] text-start">
          <b>Voodoo Lab</b> is a team of passionate creatives who transform the
          ordinary into something extraordinary. We bring ideas to life at the
          highest level, adding a unique spark of inspiration to every project.
          Our mission is not just to complete tasks but to surpass expectations
          by delivering work that is truly one of a kind.
        </h1>
        <h1 className="w-[70%] text-start">
          We excel in creating high-quality voiceovers across a wide range of
          formats, from professional dubbing of texts to the narration of
          commercials, films, audiobooks, and documentaries. With a portfolio of
          successful projects and audio productions that captivate with their
          exceptional sound quality, we have earned the trust of clients who
          seek nothing but the best.
        </h1>
        <h1 className="w-[70%] text-start">
          What sets us apart is our unwavering commitment to quality and
          punctuality. Every project we undertake is approached with fresh
          creativity, ensuring that the final result is as innovative as it is
          impactful. Our experienced team understands how to breathe life into
          your ideas, crafting compelling audio that resonates with audiences.
        </h1>
        <h1 className="w-[70%] text-start">
          Explore our portfolio to experience the artistry and dedication we
          bring to every project. At Voodoo Lab, we don’t just work with
          sound—we create experiences that leave a lasting impression.
        </h1>
      </div>

      <div className="flex flex-col gap-10 pt-10">
        <h1 className="text-4xl text-center font-bold">
          Our Satisfied Customers
        </h1>
        <CustomersBanner />
      </div>
    </div>
  );
}
