import React from "react";

import productIcon from "../assets/card3.png";

import aboutLogo from "../assets/card1.png";

import itemStats1 from "../assets/item_cyan1.png";
import itemStats2 from "../assets/item_cyan2.png";
import itemStats3 from "../assets/item_cyan3.png";
import itemStats4 from "../assets/item_cyan4.png";

import arrowRight from "../assets/arrow_right.png";
// import ArrowRight2 from "../assets/arrow_right2.svg";
// import { ReactComponent as ArrowRight2 } from "../assets/arrow_right2.svg";

import ItemStatsComponent from "./shared/ItemStatsComponent";
import ProductSectionAComponent from "./shared/ProductSectionAComponent";

const Product = () => {
  return (
    <div>
      {/* About Title */}
      <ProductSectionAComponent
        src={productIcon}
        title="How to design footer like we did Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
          <div className="md:w-1/3 "></div>

          {/* Stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in, sunt in culpa qui officia deserunt mollit anim id est
                laborum
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Fauzan Akmal Mahdi
              </h5>
              <p className="text-base text-neutralGrey mb-8">
                Senior Developer
              </p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <img
                    src={itemStats1}
                    alt=""
                    className="cursor-pointer w-[80px]"
                  />
                  <img
                    src={itemStats2}
                    alt=""
                    className="cursor-pointer w-[80px]"
                  />
                  <img
                    src={itemStats3}
                    alt=""
                    className="cursor-pointer w-[80px]"
                  />
                  <img
                    src={itemStats4}
                    alt=""
                    className="cursor-pointer w-[80px]"
                  />
                  <img
                    src={itemStats4}
                    alt=""
                    className="cursor-pointer w-[80px]"
                  />

                  <div className="flex items-center gap-8 ">
                    <a
                      href="/"
                      className="font-bold text-brandPrimary hover:text-neutral-700"
                    >
                      Meet All Customers {/* <ArrowRight2 /> */}
                      {/* <img
                        src={arrowRight}
                        alt=""
                        className="cursor-pointer w-[20px]"
                      /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="inline-block ml-2"
                      >
                        <path
                          d="M4 12H20M20 12L14 6M20 12L14 18"
                          stroke="#4caf4f"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill="#4caf4f"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
