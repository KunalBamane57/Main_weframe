import React from 'react';
import Image from "next/image";
import logo from "./logo.png";
import search from "./search.png";
import lightbulb from "./lightbulb.png";
import favorite from "./Favorite.png";
import cart from "./cart.png";

const Navbar = () => {
  return (
    <>
      <div className="main border-b">
        <div className="navbar flex flex-wrap md:flex-nowrap h-auto md:h-32 items-center px-10">
          <div className="logo w-full md:w-[15%] flex justify-center md:justify-start mb-4 md:mb-0">
            <Image
              src={logo}
              alt="Image"
              className="h-10 md:h-auto"
            />
          </div>
          <div className="search w-full md:w-[60%] flex justify-center md:justify-start mb-4 md:mb-0">
            <div className="searchbar bg-[#f9fafb] w-[100%] md:w-[85%] h-12 rounded-md flex justify-between px-5 items-center cursor-default">
              <p className="text-gray-500">Rechercher un produit</p>
              <Image
                src={search}
                alt="Image"
                className="h-6"
              />
            </div>
          </div>
          <div className="cart-filters w-full md:w-[35%] flex flex-wrap gap-3 items-center justify-center md:justify-end">
            <div className="inspiration flex h-7 gap-2 items-center">
              <Image
                src={lightbulb}
                alt="Image"
                className="h-5"
              />
              <p className="">Inspirations</p>
            </div>
            <div className="favrios flex h-7 gap-2 items-center">
              <Image
                src={favorite}
                alt="Image"
                className="h-5"
              />
              <p className="">Mes favoris</p>
              <span className="bg-gray-200 rounded-xl w-8 text-xs px-2 font-semibold text-center">
                24
              </span>
            </div>
            <div className="cart bg-[#0093d0] flex px-4 py-3 rounded-lg gap-2 text-white font-medium cursor-pointer">
              <Image
                src={cart}
                alt="Image"
                className="h-5"
              />
              Panier
            </div>
            <div className="user rounded-full bg-[#eaedee] h-12 w-12"></div>
          </div>
        </div>
        <div className="subnav list-none flex justify-around uppercase px-7 text-[#6b7280] flex-wrap cursor-pointer">
          <li className='text-[#0093d0] pb-2 font-semibold border-b-2 border-[#0093d0]'>Art de la table</li>
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
  )
}

export default Navbar
