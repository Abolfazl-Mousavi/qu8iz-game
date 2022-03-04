import React from "react";
import { BsCoin } from "react-icons/bs";

const Navbar = ( score ) => {
  return (
    <div className="border-b-2 bg-color1 flex justify-around items-center">
      <h1 className=" rounded-lg my-2 text-3xl font-Daughter font-semibold px-3 py-2">
        <span className="text-cyan-900">Qu8iz</span>
        <span className="text-indigo-900">Game</span>
      </h1>
      <div className="flex items-center bg-cyan-900 h-min p-2 px-3 rounded-3xl text-white  ">
        <BsCoin className="m-1" />
        Points: {score.score}
      </div>
    </div>
  );
};

export default Navbar;
