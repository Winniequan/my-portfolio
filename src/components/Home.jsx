import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen  bg-purple-900">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-green-400">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold">Ying Quan</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front End Developer.
        </h2>
        <p className="text-[#8892b0] py=4 max-w-[700px]">
          Currently, I'm focused on building responsive web applications and
          pursuing my master's degree in Harrisburg University.
        </p>
        <div>
          <Link to="work">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button> 
          </Link>
        </div>
      </div>
    </div>
  );
};
 // Submit the form below or send me an email - quanying26@hotmail.com

export default Home;
