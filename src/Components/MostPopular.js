import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Goddess4 from "../Assets/Goddess4.png";
import SAG from "../Assets/SAG.png";
import better from "../Assets/better.png";
import ss from "../Assets/ss.png";
import GoddessX from "../Assets/GoddessX.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpIcon } from "@heroicons/react/outline";
import { Navigation } from "swiper";

export default function MostPopular() {
  AOS.init({
    duration: 1000,
  });
  return (
    <div className="mt-36 mb-20 ">
      <div data-aos="fade-up">
        <div className="flex md:items-center justify-between mx-5 md:mx-16">
          <p className="text-2xl md:text-4xl">Most Popular</p>
          <button className="text-base lg:text-xl flex text-customGray border border-black lg:px-4 lg:py-2">
            View All
            <ArrowUpIcon className="h-6 w-6 my-auto rotate-45 ml-4" />
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
                <img src={better} alt="better" />
                <div className="border py-5 px-5">
                  <div className="flex space-x-5">
                    <img src={ss} alt="ss" />
                    <p className="text-2xl md:text-xl text-customGray font-normal">
                      Safe Spaces
                    </p>
                  </div>
                  <p className="text-3xl font-semibold pt-5">B3TT3R DAYS</p>
                </div>
                <div className="border flex justify-between text-xl md:text-lg text-customGray bg-black md:font-medium font-bold py-5 px-5">
                  <div>
                    <p>Current Bid</p>
                    <p className="text-white">2.65ETH</p>
                  </div>
                  <div>
                    <p>Ending in</p>
                    <p className="text-white">8m 55s</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col">
                <img src={Goddess4} alt="Goddess4" />
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
            <SwiperSlide>
              <div className="flex flex-col">
                <img src={GoddessX} alt="GG" />
                <div className="border py-5 px-5">
                  <div className="flex space-x-5">
                    <img src={SAG} alt="GG" />
                    <p className="text-2xl text-customGray font-normal md:text-xl">
                      She's a Goddess
                    </p>
                  </div>
                  <p className="text-3xl font-semibold pt-5">GODDESS X</p>
                </div>
                <div className="border flex justify-between text-xl md:text-lg text-customGray bg-black md:font-medium font-bold py-5 px-5">
                  <div>
                    <p>Current Bid</p>
                    <p className="text-white">1.77ETH</p>
                  </div>
                  <div>
                    <p>Ending in</p>
                    <p className="text-white">6hr 3m 55s</p>
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

      <div className="lg:hidden mx-5 space-y-10">
        <div className="flex flex-col mt-10">
          <img src={better} alt="GG" />
          <div className="border py-5 px-5">
            <div className="flex space-x-5">
              <img src={ss} alt="GG" />
              <p className="text-xl text-customGray font-normal">Safe Spaces</p>
            </div>
            <p className="text-2xl font-semibold pt-5">B3TT3R DAYS</p>
          </div>
          <div className="border flex justify-between text-xl md:text-lg text-customGray bg-black md:font-medium font-bold py-5 px-5">
            <div>
              <p>Current Bid</p>
              <p className="text-white">2.65ETH</p>
            </div>
            <div>
              <p>Ending in</p>
              <p className="text-white">8m 55s</p>
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

        <div className="flex flex-col">
          <img src={GoddessX} alt="GG" />
          <div className="border py-5 px-5">
            <div className="flex space-x-5">
              <img src={SAG} alt="GG" />
              <p className="text-xl text-customGray font-normal md:text-xl">
                She's a Goddess
              </p>
            </div>
            <p className="text-2xl font-semibold pt-5">GODDESS X</p>
          </div>
          <div className="border flex justify-between text-xl md:text-lg text-customGray bg-black md:font-medium font-bold py-5 px-5">
            <div>
              <p>Current Bid</p>
              <p className="text-white">1.77ETH</p>
            </div>
            <div>
              <p>Ending in</p>
              <p className="text-white">6hr 3m 55s</p>
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
