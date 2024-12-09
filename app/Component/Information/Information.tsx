import React from 'react';
import Image from 'next/image';
import machine from './machine.png';
import table from './Table.png';
import wishlist from './wishlist.png';
import scale from './scale.jpg';
import radius from './radius.jpg';

const Information = () => {
  return (
    <>
      <div className="beadcrum flex gap-3 px-10 py-3">
        <p>Home</p>
        <li className="text-[#727781]">Art de la table</li>
      </div>
      <div className="Component-detail px-4 md:px-10 flex flex-col md:flex-row">
        <div className="left w-full md:w-[50%] flex items-center mb-5 md:mb-0">
          <div className="infoimage w-full px-3 py-3 bg-[#f8f6f4] rounded-lg flex">
            <div className="angles flex flex-row md:flex-col gap-2 md:gap-1">
              <Image src={table} alt="Image" className="h-12 w-12 rounded-lg" />
              <Image src={table} alt="Image" className="h-12 w-12 rounded-lg opacity-50" />
              <Image src={table} alt="Image" className="h-12 w-12 rounded-lg opacity-50" />
              <Image src={table} alt="Image" className="h-12 w-12 rounded-lg opacity-50" />
            </div>
            <div className="imagemachine pl-5 md:pl-10">
              <Image src={machine} alt="Image" />
            </div>
          </div>
        </div>
        <div className="right w-full md:w-[50%] px-4 md:px-5 py-5">
          <div className="name_wishlist flex justify-between items-start mb-4">
            <div className="name font-serif text-xl md:text-3xl font-extralight">
              <h2>Cheese – appareil à raclette 1/2 roue</h2>
            </div>
            <div className="wishlist">
              <Image src={wishlist} alt="Image" />
            </div>
          </div>
          <div className="price flex items-center gap-1 border-b-2 pb-3">
            <p className="text-2xl md:text-3xl">39,50€</p>
            <span className="text-[#9c9c9c]">/pièce</span>
          </div>
          <div className="scale-ref flex flex-col md:flex-row justify-between py-5 font-medium items-start md:items-center border-b-2">
            <div className="scale-rad flex gap-5 mb-4 md:mb-0">
              <div className="scale flex gap-3">
                <Image src={scale} alt="Image" className="h-8 w-8" />
                <div className="num flex">
                  <p className="text-xl">20</p>
                  <p className="text-xs">cm</p>
                </div>
              </div>
              <div className="radius flex gap-3">
                <Image src={radius} alt="Image" className="h-8 w-8" />
                <div className="num flex">
                  <p className="text-xl">20</p>
                  <p className="text-xs">cm</p>
                </div>
              </div>
            </div>
            <div className="ref font-normal text-sm text-[#9c9c9c]">
              RÉF : VABGN5
            </div>
          </div>
          <div className="detailedinfo border-b-2 md:pb-32">
            <div className="detail w-full md:w-[59%] py-3 text-[#5d5d5d]">
              <p>
                Location appareil à raclette - Raclette traditionnelle 1/2 roue
                Réglable en hauteur Appareil à raclette professionnel Boîtier
                de chauffe horizontal réglable en hauteur
              </p>
              <br />
              <span>220V</span> <br />
              <span>900W</span>
            </div>
          </div>
          <div className="btn pt-4 flex flex-col md:flex-row gap-3">
            <div className="quantity py-3 flex justify-center gap-9 border-2 w-full md:w-[20%] text-lg rounded-lg">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>
            <div className="quantity py-3 flex justify-center gap-9 w-full md:w-[80%] text-lg rounded-lg bg-[#5cd2dd] text-white uppercase">
              <span>Ajouter au panier</span>
            </div>
          </div>
        </div>
      </div>
      <div className="component-description px-4 md:px-10 py-10 flex flex-col md:flex-row gap-5 pb-28">
        <div className="left w-full md:w-[50%] pr-0 md:pr-5">
          <h1 className="text-lg">Description produit</h1>
          <p className="text-base text-[#9c9c9c]">
            Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € /
            pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait
            l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence
            "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient
            toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la
            catégorie "Art de la Table".
          </p>
        </div>
        <div className="right w-full md:w-[50%] flex flex-col gap-2">
          <div className="infoadd bg-[#fbf9f8] px-5 py-5 rounded-lg flex justify-between text-lg text-[#393939]">
            <span>Livraisons</span>
            <span className="text-4xl font-thin">+</span>
          </div>
          <div className="infoadd bg-[#fbf9f8] px-5 py-5 rounded-lg flex justify-between text-lg text-[#393939]">
            <span>Questions</span>
            <span className="text-4xl font-thin">+</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
