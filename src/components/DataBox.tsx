"use client";

import React, { useEffect, useState } from "react";
import Box from "./Box";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";
import Link from "next/link";

const foodData = [
  {
    title: "$207B",
    body: "The specialty food market is booming, with sales hitting $207 billion in 2023. Customers, especially Millennials, increasingly prefer artisan and values-driven brands.",
    sourceUrl:
      "https://www.ift.org/news-and-publications/food-technology-magazine/issues/2024/july/features/the-mainstream-appeal-of-specialty-foods",
  },
  {
    title: "90%",
    body: "Consumer awareness of organic products rose significantly. By 2023, nearly 90% of Americans said they were familiar or somewhat familiar with organic food claims.",
    sourceUrl: "https://www.statista.com/topics/1047/organic-food-industry/",
  },
  {
    title: "2 in 3",
    body: "Nearly 2 in 3 consumers said that clean labels had at least some impact on their purchasing decisions when surveyed.",
    sourceUrl:
      "https://www.innovamarketinsights.com/trends/global-trends-in-clean-label/",
  },
  {
    title: "$30B",
    body: "The organic food market in the U.S. grew steadily from 2013 to 2023, increasing by over $30 billion.",
    sourceUrl: "https://www.statista.com/topics/1047/organic-food-industry/",
  },
  {
    title: "26%",
    body: "26% of millennials identify as vegetarian or vegan, while 34% of meat-eating millennials consume vegetarian meals regularly.",
    sourceUrl:
      "https://www.heart.org/en/news/2020/03/04/millennials-have-their-own-ideas-about-food-and-thats-changing-the-entire-system",
  },
];

function DataBox() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Show a new fact every 5 seconds
    const interval = setInterval(() => showNext(), 5000);
    return () => clearInterval(interval);
  }, []);

  function showNext() {
    setCurrentIndex((prev) => {
      if (prev >= foodData.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }

  function showPrevious() {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return 0;
      }
      return prev - 1;
    });
  }

  return (
    <div className="flex flex-col items-end">
      <div className="flex">
        <button className="btn btn-ghost" onClick={showPrevious}>
          <ArrowLeftIcon height={24} width={24} fill="black" />
        </button>
        <button className="btn btn-ghost" onClick={showNext}>
          <ArrowRightIcon height={24} width={24} fill="black" />
        </button>
      </div>
      <Box
        title={foodData[currentIndex].title}
        body={foodData[currentIndex].body}
      >
        <Link
          className="underline bold"
          href={foodData[currentIndex].sourceUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          source
        </Link>
      </Box>
    </div>
  );
}

export default DataBox;
