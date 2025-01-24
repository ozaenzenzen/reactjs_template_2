import React from "react";
import MainButton from "./MainButton";

const ProductSectionAComponent = ({src, title, description}) => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
      <div className="md:-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <img src={src} alt="" className="w-[500px]" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
            {title}
          </h2>
          <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
            {description}
          </p>
          <MainButton title="Learn More"></MainButton>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionAComponent;
