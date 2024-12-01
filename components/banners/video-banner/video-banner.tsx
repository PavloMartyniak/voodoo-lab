import React from "react";
import "./video-banner.scss";

export const VideoBanner = ({
  title,
  subtitle,
  src,
}: {
  title: string;
  subtitle?: string;
  src: string;
}) => {
  return (
    <div className={`video-banner`}>
      <div className="overlay" />
      <div className="content">
        <h1>{title}</h1>
        <p className="hidden lg:block">{subtitle}</p>
      </div>
      <video className="background-video" autoPlay muted loop>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};
