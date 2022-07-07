import React from "react";
import { ArrowUpIcon } from "@heroicons/react/outline";
import Goddess1 from "../Assets/Goddess1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

export default function FirstSection() {
  AOS.init({
    duration: 1000,
  });
  return (
    <div
      className="lg:flex lg:flex-row lg:space-x-36 lg:mx-16"
      data-aos="fade-up"
    >
      <div className="divide-y divide-customGray lg:basis-1/2">
        <div>
          <p className="text-3xl md:text-7xl text-center lg:text-left mt-8 lg:mt-32 font-light tracking-wider">
            Collect MamiWOTA
            <br /> Digital Artworks
          </p>
          <p className="text-lg lg:text-2xl text-center lg:text-left lg:w-4/6 lg:mx-0 font-light lg:font-normal mt-4">
            Buy and sell the rarest of NFTs from the world's best artists
          </p>
          <button className="transition duration-700 hover:scale-125 hover:bg-secondary hover:text-black w-11/12 lg:w-5/12 lg:mt-12 mx-4 lg:mx-0 mt-4 bg-black text-white py-5 text-xl flex justify-center">
            Join the Community
            <ArrowUpIcon className="h-6 w-6 my-auto rotate-45 ml-4" />
          </button>
        </div>

        <div className="mt-8 mx-3 pt-8 lg:pt-24 lg:justify-start lg:space-x-16 justify-between flex">
          <div>
            <p className="text-4xl lg:text-5xl">
              <CountUp end={12} duration={3} />
              k+
            </p>
            <p className="text-lg text-neutral-400">Artworks</p>
          </div>
          <div>
            <p className="text-4xl lg:text-5xl">
              <CountUp end={67} duration={5} />
              k+
            </p>
            <p className="text-lg text-neutral-400">Auctions</p>
          </div>
          <div>
            <p className="text-4xl lg:text-5xl">
              <CountUp end={3} duration={7} />
              k+
            </p>
            <p className="text-lg text-neutral-400">Artists</p>
          </div>
        </div>
      </div>

      <div className="justify-end mt-20 bg-secondary mx-4 mb-4 lg:basis-1/3">
        <img src={Goddess1} className="md:w-full" alt="GG"></img>
        <p className="text-5xl text-center mt-4 font-bold">GODDESS I</p>
        <p className="mt-4 ml-16 text-lg text-neutral-400 font-medium">
          Reserve price
        </p>
        <div className="mt-2 ml-16 flex">
          <p className="text-3xl font-bold">3.00ETH</p>
          <p className="my-auto ml-2 text-sm text-neutral-400">($7,835.66)</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center mt-4 mx-16 lg:mx-0 pb-5 lg:space-x-8">
          <button className="transition duration-700 hover:scale-125 hover:bg-secondary hover:border hover:border-black hover:text-black bg-black text-white lg:px-12 py-6">
            Place Bid
          </button>
          <button className="transition duration-700 hover:scale-125 hover:bg-black hover:text-white mt-2 py-6 lg:px-8 border border-black">
            View Artwork
          </button>
        </div>
      </div>
    </div>
  );
}
