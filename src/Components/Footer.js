import React from "react";
import M from "../Assets/M.png";
import IG from "../Assets/IG.png";
import Discord from "../Assets/Discord.png";
import Twitter from "../Assets/Twitter.png";
import Divider from "../Assets/Divider.png";

const Footer = () => {
  return (
    <div>
      <div className="mt-24 mx-5 lg:mx-16 lg:flex lg:justify-between">
        <div>
          <p className="text-4xl font-semibold">
            MamiWOTA<sup>TM</sup>
          </p>
          <p className="text-xs mt-3 text-gray-600">
            © 2022. All rights reserved.️
          </p>

          <div className="flex justify-between mt-12">
            <button>
              <img
                src={M}
                alt="GG"
                className="transition duration-700 hover:scale-125"
              />
            </button>
            <button>
              <img
                src={IG}
                alt="GG"
                className="transition duration-700 hover:scale-125"
              />
            </button>
            <button>
              <img
                src={Discord}
                alt="GG"
                className="transition duration-700 hover:scale-125"
              />
            </button>
            <button>
              <img
                src={Twitter}
                alt="GG"
                className="transition duration-700 hover:scale-125"
              />
            </button>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 flex flex-col space-y-3">
          <p className="text-base font-semibold">MamiWOTA</p>
          <a className="text-base text-gray-400" href="#Explore">
            Explore
          </a>
          <a className="text-base text-gray-400" href="#Help Center">
            Help Center
          </a>
          <a className="text-base text-gray-400" href="#Careers">
            Careers
          </a>
          <a className="text-base text-gray-400" href="#API">
            API Documentation
          </a>
        </div>

        <div className="mt-12 lg:mt-0 flex flex-col space-y-3">
          <p className="text-base font-semibold">Community</p>
          <a className="text-base text-gray-400" href="#GG">
            About
          </a>
          <a className="text-base text-gray-400" href="#GG">
            Blog
          </a>
          <a className="text-base text-gray-400" href="#GG">
            Press
          </a>
          <a className="text-base text-gray-400" href="#GG">
            WOTA Token
          </a>
        </div>

        <div className="mt-12 lg:mt-0 flex flex-col space-y-3">
          <p className="text-base font-semibold">Legal</p>
          <a className="text-base text-gray-400" href="#GG">
            Term of Use
          </a>
          <a className="text-base text-gray-400" href="#GG">
            Privacy Policy
          </a>
          <a className="text-base text-gray-400" href="#GG">
            Advisory Services
          </a>
          <a className="text-base text-gray-400" href="#GG">
            Guidelines
          </a>
        </div>
      </div>
      <img src={Divider} alt="GG" className="my-12 w-screen" />
    </div>
  );
};

export default Footer;
