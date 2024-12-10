'use client';

import React, { useState } from 'react';
import Tablecard from './Tablecard';
import Image from "next/image";
import left_arrow from "./left arrow.png";
import right_arrow from "./right arrow.png";

const Card = () => {
  const totalCards = 20;
  const cardsPerPage = 5;
  const [startIndex, setStartIndex] = useState(0);

  const nextPage = () => {
    if (startIndex + cardsPerPage < totalCards) {
      setStartIndex(startIndex + cardsPerPage);
    }
  };
  const prevPage = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  return (
    <div className="bg-[#fbf9f8] px-5 sm:px-8 lg:px-10 relative h-auto lg:h-[550px]">
      <div className="article-headline flex flex-col sm:flex-row sm:justify-between py-5">
        <h1 className="text-2xl sm:text-3xl mb-3 sm:mb-0">Articles similaires</h1>
        <span className="underline underline-offset-2 text-sm sm:text-base">
          Voir toute la collection
        </span>
      </div>

      <div className="card-section flex items-center justify-center relative">
        <button
          onClick={prevPage}
          className="absolute left-0 bg-[#5cd2dd] text-white h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-md"
          style={{ transform: 'translateX(-50%)' }}
        >
          <Image src={left_arrow} alt="Previous" className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <div className="cards flex overflow-x-auto sm:overflow-visible px-2 sm:px-4 lg:px-10 gap-3 sm:gap-5">
          {Array.from({ length: cardsPerPage }).map((_, index) => {
            const cardIndex = startIndex + index;
            if (cardIndex < totalCards) {
              return (
                <Tablecard
                  key={cardIndex}
                  cardIndex={cardIndex}
                  customStyles="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-48"
                />
              );
            }
            return null;
          })}
        </div>

        <button
          onClick={nextPage}
          className="absolute right-0 bg-[#5cd2dd] text-white h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-md"
          style={{ transform: 'translateX(50%)' }}
        >
          <Image src={right_arrow} alt="Next" className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </div>
  );
};

export default Card;
