import React from "react";

export const ButtonGroup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-wrap gap-4 items-center w-fit mx-10 mb-10">
      {children}
    </div>
  );
};
