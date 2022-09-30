import React from "react";
import heroImg from "../assets/hero-img.svg";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 ">
        {/* card 1 */}
        <div className="lg:order-2 lg:row-span-2">
          <h2 className="text-[65px] leading-[64px] font-bold text-center  front-end-container lg:mt-[350px] ">
            Imagine if <br /> <span className="text-primary_300">Snapchat</span>
            <br /> had events.
          </h2>
          <p className="text-neutrals_100 text-2xl text-center max-w-md mx-auto mt-4">
            Easily host and share events with your friends across any social
            media.
          </p>
        </div>

        {/* card 2 */}
        <div className="flex justify-center mt-14 lg:row-span-5 lg:order-1">
          <img className="" src={heroImg} alt="" />
        </div>
        {/* card 3 */}
        <div className="lg:flex justify-center lg:order-3 lg:row-span-1 mt-11">
          <button className="btn-primary"> Create my event</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
