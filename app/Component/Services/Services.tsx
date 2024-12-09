import React from 'react'
import Image from "next/image";
import services from "./above_footer services.png"
import sopha from "./sopha.png"
import right_arrow from "./right arrow.png"

const Services = () => {
    return (
        <div className='main bg-gradient-to-b from-[#fdf7fa] to-[#ffffff] pb-32 border-b-2'>
            <div className="container_1 flex justify-center py-14">
                <div className="title text-center flex flex-col gap-3">
                    <h1 className='text-4xl font-semibold'>On s’occupe de <span className='text-[#5cd2dd]'>tout</span></h1>
                    <p className='text-[#9c9c9c]'>Office ipsum you must be muted. It meeting commitment busy pain.</p>
                    <Image src={services} alt="Previous" className="" />
                </div>
            </div>
            <div className="container_2 px-10 flex flex-col lg:flex-row gap-5">
                <div className="left w-full lg:w-[50%]">
                    <Image src={sopha} alt="Previous" className="w-full h-auto" />
                </div>
                <div className="right w-full lg:w-[50%] bg-[#ffebf6] px-8 py-12 rounded-3xl">
                    <div className="inner-box1">
                        <h1 className='text-4xl font-semibold'>S’inscrire & économiser <span className='text-[#5cd2dd]'>10%</span></h1>
                    </div>
                    <div className="inner-box2">
                        <p className='text-[#9c9c9c] text-sm py-5'>
                            Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.
                        </p>
                    </div>
                    <div className="inner-box3 flex gap-3 flex-col sm:flex-row">
                        <p className='w-full sm:w-[80%] bg-white text-[#9c9c9c] rounded-lg py-4 px-5'>
                            john@doe.com
                        </p>
                        <p className='w-full sm:w-[23%] bg-[#5cd2dd] text-white rounded-lg items-center flex justify-center gap-1 mt-3 sm:mt-0'>
                            S'INSCRIRE
                            <span>
                                <Image src={right_arrow} alt="Previous" className="" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
