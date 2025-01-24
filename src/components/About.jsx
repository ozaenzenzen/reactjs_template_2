import React from "react";
import aboutLogo from "../assets/card1.png";

import itemStats1 from "../assets/item_cyan1.png";
import itemStats2 from "../assets/item_cyan2.png";
import itemStats3 from "../assets/item_cyan3.png";
import itemStats4 from "../assets/item_cyan4.png";
import ItemStatsComponent from "./shared/ItemStatsComponent";
import MainButton from "./shared/MainButton";

const About = () => {
  return (
    <div>
      {/* About Title */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutLogo} alt="" className="w-[500px]" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <MainButton title="Learn More"></MainButton>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              Lorem ipsum dolor sit amet <br />
              <span className="text-brandPrimary">sed do eiusmod tempor</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>

          {/* Stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <ItemStatsComponent
                src={itemStats1}
                title="Members"
                value="2,222,222"
              />
              <ItemStatsComponent
                src={itemStats2}
                title="Event Bookings"
                value="828,488"
              />
            </div>
            <div className="space-y-8">
              <ItemStatsComponent
                src={itemStats3}
                title="Clubs"
                value="43,488"
              />
              <ItemStatsComponent
                src={itemStats4}
                title="Payments"
                value="1,828,488"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
