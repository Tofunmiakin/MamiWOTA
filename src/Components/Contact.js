import React from "react";
import Divider from "../Assets/Divider.png";

const Contact = () => {
  return (
    <div className="mx-5 text-center mt-24 ">
      <p className="text-3xl lg:text-5xl font-semibold">Stay up to date!</p>
      <p className="mt-8 text-lg lg:text-xl font-light">
        Subscribe to the MamiWOTA exclusive list and be the first to know about
        upcoming Mami-artworks
      </p>
      <div className="mt-16 lg:mx-auto lg:w-2/3 relative">
        <input
          className="border w-full py-4 px-2 "
          placeholder="Your email address"
        ></input>
        <button className="absolute text-sm lg:text-lg right-2  py-4">
          Subscribe
        </button>
      </div>
      <img src={Divider} alt="divider" className="w-screen mt-24" />
    </div>
  );
};

export default Contact;
