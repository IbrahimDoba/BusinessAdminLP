import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          development with Financial data Structure analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
         Business Made Easier
        </h1>
        <div className="flex justify-center items-center pl-2">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
            Fast, Flexible Financing for
          </p>
          <Typed
            className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-gray-500"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <div>
            <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytics to increase revene for BTB, BTC, & SASS platforms</p>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
