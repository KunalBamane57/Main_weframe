"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "./logo.png";
import search from "./search.png";
import lightbulb from "./lightbulb.png";
import favorite from "./Favorite.png";
import cart from "./cart.png";
import machine from "./machine.png";

const Navbar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const suggestions = [
    { text: "fourchettes", icon: search.src },
    { text: "fourchette grande", icon: search.src },
    { text: "fourchette Piranha", icon: search.src },
    { text: "fourchette", icon: search.src },
    { text: "Fourchettes", icon: search.src },
    { text: "Sport addict", icon: search.src },
  ];

  const products = [
    {
      image: machine.src,
      title: "Produit Simple",
      price: "7€",
      category: "ART DE LA TABLE",
    },
    {
      image: machine.src,
      title: "Produit Gamme",
      price: "2,20€",
      category: "ART DE LA TABLE",
    },
    {
      image: machine.src,
      title: "Jewel Grand Couteau",
      price: "7€",
      category: "ART DE LA TABLE",
    },
    {
      image: machine.src,
      title: "Piranha Fourchette à Zakouski",
      price: "2,20€",
      category: "ART DE LA TABLE",
    },
  ];

  return (
    <>
      <div className="main border-b">
        <div className="navbar flex flex-wrap md:flex-nowrap h-auto md:h-32 items-center px-10">
          <div className="logo w-full md:w-[15%] flex justify-center md:justify-start mb-4 md:mb-0">
            <Image src={logo} alt="Logo" className="h-10 md:h-auto" />
          </div>
          <div className="search w-full md:w-[60%] flex justify-center md:justify-start mb-4 md:mb-0 relative">
            <div className="searchbar bg-[#f9fafb] w-[100%] md:w-[85%] h-12 rounded-md flex justify-between px-5 items-center relative">
              <input
                type="text"
                placeholder="Rechercher un produit"
                className="bg-transparent outline-none w-full h-full text-gray-700"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
              <Image src={search} alt="Search Icon" className="h-6" />
            </div>

            {showSuggestions && (
              <div
                className={`absolute bg-white shadow-xl border-0 rounded-md top-full mt-1 z-10 transition-all duration-300 ${
                  showSuggestions ? "w-[130%]" : "w-[85%]"
                }`}
              >
                <div className="flex">
                  <div className="w-1/3 p-4">
                  <h2 className="text-[#9c9c9c] text-sm">Suggestions</h2>
                    <ul>
                      {suggestions
                        .filter((s) =>
                          s.text.toLowerCase().includes(searchText.toLowerCase())
                        )
                        .map((suggestion, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-gray-700 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            <Image
                              src={suggestion.icon}
                              alt="Suggestion Icon"
                              className="h-5 w-5"
                              width={20}
                              height={20}
                            />
                            {suggestion.text}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="w-2/3 p-4 overflow-x-auto flex gap-4">
                    {products.map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-2 p-2 rounded cursor-pointer min-w-[150px]"
                      >
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={130}
                          height={130}
                          className="rounded bg-[#fbf9f8] px-3 py-3"
                        />
                        <div className="text-start">
                          <p className="text-xs text-gray-500">
                            {product.category}
                          </p>
                          <p className="text-sm ">{product.title}</p>
                          <p className="text-sm font-semibold">
                            {product.price}{" "}
                            <span className="font-normal text-[#9c9c9c]">
                              / 20 pièces
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center ml-[370px] mr-3 py-2 border-2 mb-3 mt-[-20px] text-[#212121] cursor-pointer hover:underline">
                  Voir tous les résultats
                </div>
              </div>
            )}
          </div>

          <div className="cart-filters w-full md:w-[35%] flex flex-wrap gap-3 items-center justify-center md:justify-end">
            <div className="inspiration flex h-7 gap-2 items-center">
              <Image src={lightbulb} alt="Lightbulb Icon" className="h-5" />
              <p>Inspirations</p>
            </div>
            <div className="favorites flex h-7 gap-2 items-center">
              <Image src={favorite} alt="Favorite Icon" className="h-5" />
              <p>Mes favoris</p>
              <span className="bg-gray-200 rounded-xl w-8 text-xs px-2 font-semibold text-center">
                24
              </span>
            </div>
            <div className="cart bg-[#0093d0] flex px-4 py-3 rounded-lg gap-2 text-white font-medium cursor-pointer">
              <Image src={cart} alt="Cart Icon" className="h-5" />
              Panier
            </div>
            <div className="user rounded-full bg-[#eaedee] h-12 w-12"></div>
          </div>
        </div>

        <div className="subnav list-none flex justify-around uppercase px-7 text-[#6b7280] flex-wrap cursor-pointer">
          <li className="text-[#0093d0] pb-2 font-semibold border-b-2 border-[#0093d0]">
            Art de la table
          </li>
          <li>Mobilier</li>
          <li>Nappage</li>
          <li>Matériel de salle</li>
          <li>Cuisine</li>
          <li>Barbecue</li>
          <li>Tente</li>
          <li>Chauffage</li>
          <li>Podium - Piste de danse</li>
          <li>Son et lumière</li>
          <li>Packs</li>
          <li>Consommables</li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
