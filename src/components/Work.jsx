import React from "react";

import dashboard from "../assets/dashboard.png";
import mernAuth from "../assets/mernauth.png";
import foodApp from "../assets/foodApp.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-full text-gray-300 bg-purple-900 flex pt-14"
    >
      {/*Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">Check out some of my recent work</p>
        </div>

        {/*Card container */}

        <div
          style={{ backgroundImage: `url(${dashboard})` }}
          className="shadow-lg  shadow-[#040c16] group container rounded-md flex 
          justify-center items-center mx-auto content-div"
        >
          {/*Hover effects */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              React JS Application
            </span>
            <div className="pt-8 text-center">
              <a href="https://www.google.com">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Link
                </button>
              </a>
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${mernAuth})` }}
          className="shadow-lg  shadow-[#040c16] group container rounded-md flex 
          justify-center items-center mx-auto content-div"
        >
          {/*Hover effects */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              React JS Application
            </span>
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Link
                </button>
              </a>
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${foodApp})` }}
          className="shadow-lg  shadow-[#040c16] group container rounded-md flex 
          justify-center items-center mx-auto content-div"
        >
          {/*Hover effects */}
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
              JavaScript Application
            </span>
            <div className="pt-8 text-center">
              <a href="https://illustrious-donut-28ddc6.netlify.app">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Link
                </button>
              </a>
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
