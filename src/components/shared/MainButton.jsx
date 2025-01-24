import React from "react";

const MainButton = ( {title} ) => {
  return (
    <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">
      {title}
    </button>
  );
};

export default MainButton;
