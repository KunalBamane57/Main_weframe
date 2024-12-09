'use client';

import React, { useState } from 'react';
import Tablecard from '../Card/Tablecard';

const Bigcard = () => {
  const totalCards = 20;
  const cardsPerPage = 3;
  const [startIndex, setStartIndex] = useState(0);

  return (
    <div className="mt-10 px-10 relative">
      <div className="article-headline flex justify-between py-5">
        <h1 className="text-3xl">Ces produits pourraient vous intéresser</h1>
        <span className="underline underline-offset-2">Voir toute la collection</span>
      </div>
      <div className="card-section flex justify-around relative">
        <div className="cards flex gap-5">
          {Array.from({ length: cardsPerPage }).map((_, index) => {
            const cardIndex = startIndex + index;
            if (cardIndex < totalCards) {
              return (
                <Tablecard
                  key={cardIndex}
                  cardIndex={cardIndex}
                  customStyles="w-[470px] h-[250px]"
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Bigcard;
