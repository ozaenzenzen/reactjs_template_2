import React from "react";
import MainButton from "./MainButton";

const BannerHome = ({ src, title, description }) => {
  return (
    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
      <div>
        <img src={src} alt="Logo Avocade" />
      </div>
      {/* hero text */}
      <div className="md:w-1/2">
        <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
          {title}
        </h1>
        <p className="text-neutralGrey text-base mb-8">
          {description}
        </p>
        <MainButton title="Register"></MainButton>
      </div>
    </div>
  );
};

export default BannerHome;
