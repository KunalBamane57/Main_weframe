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
    <div className="bg-[#fbf9f8] px-10 relative h-[550px]">
      <div className="article-headline flex justify-between py-5">
        <h1 className="text-3xl">Articles similaires</h1>
        <span className="underline underline-offset-2">Voir toute la collection</span>
      </div>
      <div className="card-section flex items-center justify-center relative">
        <button
          onClick={prevPage}
          className="absolute left-0 bg-[#5cd2dd] text-white px-4 py-2 rounded-md h-12 w-12 flex items-center justify-center"
          style={{ transform: 'translateX(-50%)' }}
        >
          <Image src={left_arrow} alt="Previous" className="h-6 w-6" />
        </button>

        <div className="cards flex px-10 gap-5">
          {Array.from({ length: cardsPerPage }).map((_, index) => {
            const cardIndex = startIndex + index;
            if (cardIndex < totalCards) {
              return (
                <Tablecard
                  key={cardIndex}
                  cardIndex={cardIndex}
                  customStyles="w-64 h-64"
                />
              );
            }
            return null;
          })}
        </div>

        <button
          onClick={nextPage}
          className="absolute right-0 bg-[#5cd2dd] text-white px-4 py-2 rounded-md h-12 w-12 flex items-center justify-center"
          style={{ transform: 'translateX(50%)' }}
        >
          <Image src={right_arrow} alt="Next" className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Card;
