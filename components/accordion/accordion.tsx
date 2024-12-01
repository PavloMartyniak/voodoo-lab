"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export const Accordion = ({
  item,
  index,
}: {
  item: { title: string; content: string };
  index: number;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      <div key={index} className="border-b">
        <div
          className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-200"
          onClick={() => toggleAccordion(index)}
        >
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <span>
            {activeIndex === index ? (
              <svg
                className="w-5 h-5 transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 transform rotate-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </div>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: activeIndex === index ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-4 ">{item.content}</div>
        </motion.div>
      </div>
    </div>
  );
};
