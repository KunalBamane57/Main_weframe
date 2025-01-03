import React, { useState } from "react";
import Image from "next/image";
import table from "./Big-table.png";

interface TablecardProps {
    cardIndex: number;
    customStyles?: string;
}

const Tablecard: React.FC<TablecardProps> = ({ cardIndex, customStyles = "" }) => {
    const [isHeartSelected, setIsHeartSelected] = useState(false);

    const toggleHeart = () => {
        setIsHeartSelected(!isHeartSelected);
    };

    return (
        <div
            className={`card py-4 rounded group hover:transition-shadow duration-300 ${customStyles}`}
        >
            <div className="image rounded-lg">
                <div className="imagebg bg-[#f6f4f3] px-5 py-5">
                    <div className="heart flex justify-between items-center">
                        <button
                            className="w-8 h-8 flex justify-center items-center"
                            onClick={toggleHeart}
                            aria-label="Toggle Wishlist"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={isHeartSelected ? "#ec4899" : "none"}
                                stroke={isHeartSelected ? "none" : "currentColor"}
                                strokeWidth={isHeartSelected ? "0" : "1"}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`w-8 h-8 transition-transform duration-300 ${isHeartSelected ? 'scale-110' : ''}`} // Add scaling effect on click
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>

                        </button>
                        <div className="al-lot gap-2">
                            <span className="upppercase bg-white text-xs px-2 rounded-md">
                                Art de la table
                            </span>
                            <span className="lot upppercase bg-white text-xs px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Lot
                            </span>
                        </div>
                    </div>
                    <div className="image flex justify-center items-center transform transition-transform duration-300 group-hover:scale-105">
                        <Image src={table} alt="Table Image" className="" />
                    </div>

                    <div className="count opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex justify-between items-center mt-3 bg-white py-2 px-3 rounded-lg gap-2">
                            <div className="flex items-center gap-2">
                                <span>QTÉ</span>
                                <div className="btn flex gap-6 bg-[#f3f3f3] rounded">
                                    <button className="rounded px-2 py-1 text-sm">-</button>
                                    <span>1</span>
                                    <button className="rounded px-2 py-1 text-sm">+</button>
                                </div>
                            </div>
                            <button className="bg-pink-500 text-white px-4 py-2 rounded text-sm">
                                Ajouter
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product-info px-2">
                    <div className="title-price flex justify-between h-12 py-5">
                        <span className="text-2xl font-serif">Title</span>
                        <span className="text-xl">
                            0<span className="text-sm">€</span>
                        </span>
                    </div>
                    <div className="pricebtn text-[#9c9c9c] text-md py-2 flex justify-between items-center">
                        <span>
                            0,35€/Pièce <span className="text-xs">· RÉF : VABGN5</span>
                        </span>
                        <span className="bg-[#f1f4f6] px-1 rounded-full text-xs text-[#546a7d]">
                            20 pièces
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tablecard;
