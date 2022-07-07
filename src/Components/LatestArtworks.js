import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Goddess3 from "../Assets/Goddess3.png";
import Oblivion from "../Assets/Oblivion.png";
import Babe04 from "../Assets/Babe04.png";
import Goddess4 from "../Assets/Goddess4.png";
import SAG from "../Assets/SAG.png";
import APA from "../Assets/APA.png";
import MEB from "../Assets/MEB.png";
import { ArrowUpIcon } from "@heroicons/react/outline";
import { Navigation } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LatestArtworks() {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className="mt-48 mb-20">
      <div className=" mx-16 " data-aos="fade-up">
        <div className="flex md:items-center justify-between -mx-10 lg:mx-0">
          <p className="text-2xl md:text-4xl ">Latest Artworks</p>
          <button className="text-sm lg:text-xl flex text-customGray border border-black px-3 py-1 lg:px-4 lg:py-2">
            View All
            <ArrowUpIcon className="h-4 w-4 lg:h-6 lg:w-6 my-auto rotate-45 ml-4" />
          </button>
        </div>

        <div className="mt-8 hidden lg:flex">
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col">
                <img src={Goddess3} alt="GG" />
                <div className="border py-5 px-5">
                  <div className="flex space-x-5">
                    <img src={SAG} alt="GG" />
                    <p className="text-2xl md:text-xl text-customGray font-normal">
                      She's a Goddess
                    </p>
                  </div>
                  <p className="text-3xl font-semibold pt-5">GODDESS III</p>
                </div>
                <div className="border text-xl md:text-lg text-customGray font-normal py-5 px-5">
                  <p>Last sold for</p>
                  <p>1.82ETH</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col">
                <img src={Oblivion} alt="GG" />
                <div className="border py-5 px-5">
                  <div className="flex space-x-5">
                    <img src={APA} alt="GG" />
                    <p className="text-2xl md:text-xl text-customGray font-normal">
                      Art of the Purple Artist
                    </p>
                  </div>
                  <p className="text-3xl font-semibold pt-5">OBLIVION</p>
                </div>
                <div className="border flex justify-between text-xl md:text-lg text-customGray bg-black md:font-medium font-bold py-5 px-5">
                  <div>
                    <p>Current Bid</p>
                    <p className="text-white">2.44ETH</p>
                  </div>
                  <div>
                    <p>Ending in</p>
                    <p className="text-white">17hr 3m 55s</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col">
                <img src={Babe04} alt="GG" />
                <div className="border py-5 px-5">
                  <div className="flex space-x-5">
                    <img src={MEB} alt="GG" />
                    <p className="text-2xl text-customGray font-normal md:text-xl">
                      My Evil Babes
                    </p>
                  </div>
                  <p className="text-3xl font-semibold pt-5">BABE 04</p>
                </div>
                <div className="border flex justify-between text-xl md:text-lg text-customGray bg-black md:font-medium font-bold py-5 px-5">
                  <div>
                    <p>Current Bid</p>
                    <p className="text-white">1.32ETH</p>
                  </div>
                  <div>
                    <p>Ending in</p>
                    <p className="text-white">7hr 3m 55s</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col">
                <img src={Goddess4} alt="GG" />
                <div className="border py-5 px-5">
                  <div className="flex space-x-5">
                    <img src={SAG} alt="GG" />
                    <p className="text-2xl md:text-xl text-customGray font-normal">
                      She's a Goddess
                    </p>
                  </div>
                  <p className="text-3xl font-semibold pt-5">GODESS IV</p>
                </div>
                <div className="border flex justify-between text-xl md:text-lg text-customGray bg-black md:font-medium font-bold py-5 px-5">
                  <div>
                    <p>Current Bid</p>
                    <p className="text-white">1.56ETH</p>
                  </div>
                  <div>
                    <p>Ending in</p>
                    <p className="text-white">12hr 3m 7s</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className=" lg:hidden mx-5 space-y-10">
        <div className="flex flex-col mt-10">
          <img src={Goddess3} alt="GG" />
          <div className="border py-5 px-5">
            <div className="flex space-x-5">
              <img src={SAG} alt="GG" />
              <p className="text-xl text-customGray font-normal">
                She's a Goddess
              </p>
            </div>
            <p className="text-2xl font-semibold pt-5">GODDESS III</p>
          </div>
          <div className="border text-xl md:text-lg text-customGray font-normal py-5 px-5">
            <p>Last sold for</p>
            <p>1.82ETH</p>
          </div>
        </div>

        <div className="flex flex-col">
          <img src={Oblivion} alt="GG" />
          <div className="border py-5 px-5">
            <div className="flex space-x-5">
              <img src={APA} alt="GG" />
              <p className="text-xl text-customGray font-normal">
                Art of the Purple Artist
              </p>
            </div>
            <p className="text-2xl font-semibold pt-5">OBLIVION</p>
          </div>
          <div className="border flex justify-between text-xl md:text-lg text-customGray bg-black md:font-medium font-bold py-5 px-5">
            <div>
              <p>Current Bid</p>
              <p className="text-white">2.44ETH</p>
            </div>
            <div>
              <p>Ending in</p>
              <p className="text-white">17hr 3m 55s</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <img src={Babe04} alt="GG" />
          <div className="border py-5 px-5">
            <div className="flex space-x-5">
              <img src={MEB} alt="GG" />
              <p className="text-xl text-customGray font-normal md:text-xl">
                My Evil Babes
              </p>
            </div>
            <p className="text-2xl font-semibold pt-5">BABE 04</p>
          </div>
          <div className="border flex justify-between text-xl md:text-lg text-customGray bg-black md:font-medium font-bold py-5 px-5">
            <div>
              <p>Current Bid</p>
              <p className="text-white">1.32ETH</p>
            </div>
            <div>
              <p>Ending in</p>
              <p className="text-white">7hr 3m 55s</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <img src={Goddess4} alt="GG" />
          <div className="border py-5 px-5">
            <div className="flex space-x-5">
              <img src={SAG} alt="GG" />
              <p className="text-xl text-customGray font-normal">
                She's a Goddess
              </p>
            </div>
            <p className="text-2xl font-semibold pt-5">GODESS IV</p>
          </div>
          <div className="border flex justify-between text-xl md:text-lg text-customGray bg-black md:font-medium font-bold py-5 px-5">
            <div>
              <p>Current Bid</p>
              <p className="text-white">1.56ETH</p>
            </div>
            <div>
              <p>Ending in</p>
              <p className="text-white">12hr 3m 7s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
