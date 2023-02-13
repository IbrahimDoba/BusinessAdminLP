import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";
import Button from "../assets/button";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col  p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <div className="py-2 border-b mx-8 mt-8">500 GB Storage</div>
            <div className="py-2 border-b mx-8">1 Granted User</div>
            <div className="py-2 border-b mx-8">Spend up to 2 GB</div>
            <Button />
          </div>
        </div>
        <div className="w-full bg-gray-100 shadow-xl flex flex-col  p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem]  bg-transperant"
            src={double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Two Users</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <div className="py-2 border-b mx-8 mt-8">500 GB Storage</div>
            <div className="py-2 border-b mx-8">1 Granted User</div>
            <div className="py-2 border-b mx-8">Spend up to 2 GB</div>
            <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] ">
              Start Trail
            </button>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col  p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Five Users</h2>
          <p className="text-center text-4xl font-bold">$349</p>
          <div className="text-center font-medium">
            <div className="py-2 border-b mx-8 mt-8">500 GB Storage</div>
            <div className="py-2 border-b mx-8">1 Granted User</div>
            <div className="py-2 border-b mx-8">Spend up to 2 GB</div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
