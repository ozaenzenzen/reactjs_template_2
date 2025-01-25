import { Carousel } from "flowbite-react";
import React from "react";
import logoAvocade from "../assets/logo3.png";

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import BannerHome from "./shared/BannerHome";
import MainButton from "./shared/MainButton";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-4 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel
          onSlideChange={(index) => console.log("onSlideChange()", index)}
          className="w-full mx-auto"
        >
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="Logo Avocade" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lorem ipsum dolor sit amet, consectetur{" "}
                <span className="text-brandPrimary leading-snug">
                  adipiscing elit
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <MainButton title="Register"></MainButton>
            </div>
          </div>
          <BannerHome
            src={banner2}
            title={
              <div>
                2. Lorem ipsum dolor sit amet, consectetur{" "}
                <span className="text-brandPrimary leading-snug">
                  adipiscing elit
                </span>
              </div>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <BannerHome
            src={banner2}
            title={
              <div>
                3. Lorem ipsum dolor sit amet, consectetur{" "}
                <span className="text-brandPrimary leading-snug">
                  adipiscing elit
                </span>
              </div>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
