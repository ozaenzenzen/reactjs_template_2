import React from "react";

import images1 from "../assets/images1.png";
import images2 from "../assets/images2.png";
import images3 from "../assets/images3.png";
import images4 from "../assets/images4.png";

import arrowRight from "../assets/arrow_right.png";

const Blog = () => {
  const blogs = [
    { id: 1, title: "1 Caring Lorem ipsum dolor sit amet", image: images1 },
    { id: 2, title: "2 Caring Lorem ipsum dolor sit amet", image: images4 },
    { id: 3, title: "3 Caring Lorem ipsum dolor sit amet", image: images3 },
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="faq">
      <div className="text-center md:w-1/2 mx-auto ">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 ">
          Caring Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* all blogs */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between ">
        {blogs.map((element) => (
          <div
            key={element.id}
            className="mx-auto relative mb-12 cursor-pointer"
          >
            <img src={element.image} alt="" className="w-[400px] mx-auto relative mb-12 cursor-pointer" />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="mb-3 text-neutralGrey font-semibold">
                {element.title}
              </h3>
              <div className="flex justify-center items-center gap-8">
                <a
                  href="/"
                  className="font-bold text-brandPrimary hover:text-neutral-700"
                >
                  Readmore
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
