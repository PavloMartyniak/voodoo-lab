import React from "react";

export const Avatar = ({
  src,
  name,
  size = "md",
  bgColor = "gray-200",
  textColor = "gray-800",
}: {
  src?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  bgColor?: string;
  textColor?: string;
}) => {
  const sizes = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-16 text-lg",
    xl: "w-24 h-24 text-xl",
  };

  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0]?.toUpperCase())
        .join("")
    : "?";

  return (
    <div
      className={`flex items-center justify-center rounded-full overflow-hidden ${sizes[size]} bg-${bgColor}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={name || "Avatar"}
          className="object-cover w-full h-full"
        />
      ) : (
        <span className="font-bold">{initials}</span>
      )}
    </div>
  );
};
