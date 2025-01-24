import React from "react";

const ItemStatsComponent = ({src, title, value}) => {
  return (
    <div className="flex items-center gap-4 ">
      <img src={src} alt="" className="w-[100px]" />
      <div>
        <h4 className="text-2xl text-neutralDGrey font-semibold">{value}</h4>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ItemStatsComponent;
