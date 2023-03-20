"use client";
import React from "react";

interface YearNavigationProps {
  years: number[];
}

export const YearNavigation: React.FC<YearNavigationProps> = ({ years }) => {
  const scrollToYear = (year: number) => {
    const elements = document.querySelectorAll(`[data-year="${year}"]`);
    if (elements.length > 0) {
      const firstElement = elements[0];
      firstElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="overflow-x-auto whitespace-nowrap sticky top-0 bg-white z-10">
      <ul className="flex space-x-4 w-full">
        {years.map((year) => (
          <li
            key={year}
            className="cursor-pointer inline-block border border-[#a8aaad] rounded px-2 py-1 hover:bg-[#a8aaad]"
            onClick={() => scrollToYear(year)}
          >
            &apos;{year.toString().substr(-2)}
          </li>
        ))}
      </ul>
    </nav>
  );
};
