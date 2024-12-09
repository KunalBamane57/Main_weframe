'use client';

import React, { useRef } from 'react';
import Tablecard from '../Card/Tablecard';
import Image from "next/image";
import leftArrow from "../Card/left arrow.png";
import rightArrow from "../Card/right arrow.png";

const Bigcard = () => {
  const totalCards = 20;
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: -460,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({
        left: 460,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mt-10 px-5 sm:px-10 relative">
      <div className="article-headline flex justify-between py-5">
        <h1 className="text-2xl sm:text-3xl">Ces produits pourraient vous intéresser</h1>
        <span className="underline underline-offset-2 text-sm sm:text-base">Voir toute la collection</span>
      </div>

      <div className="card-section relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#5cd2dd] text-white px-4 py-2 rounded-md h-12 w-12 flex items-center justify-center z-10 block lg:hidden"
        >
          <Image src={leftArrow} alt="Previous" className="h-6 w-6" />
        </button>

        <div
          ref={cardsContainerRef}
          className="cards flex gap-5 overflow-x-scroll lg:overflow-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide lg:flex-nowrap"
        >
          {Array.from({ length: totalCards }).map((_, index) => {
            if (index < 3) {
              return (
                <div
                  key={index}
                  className="snap-center lg:snap-none flex-shrink-0 w-[460px] h-[470px]"
                >
                  <Tablecard cardIndex={index} />
                </div>
              );
            }
            return null;
          })}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#5cd2dd] text-white px-4 py-2 rounded-md h-12 w-12 flex items-center justify-center z-10 block lg:hidden"
        >
          <Image src={rightArrow} alt="Next" className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Bigcard;
