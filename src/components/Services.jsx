import React from "react";
import Card1 from "../assets/card_green1.png";
import Card2 from "../assets/card_green2.png";
import Card3 from "../assets/card_green3.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: Card1,
    },
    {
      id: 2,
      title: "Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: Card2,
    },
    {
      id: 3,
      title: "Title 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: Card3,
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our clients
        </h2>
        <p className="text-neutralDGrey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        {/* company logo */}

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="/src/assets/comp1.png" alt="" className="w-[67px]" />
          <img src="/src/assets/comp2.png" alt="" className="w-[67px]" />
          <img src="/src/assets/comp3.png" alt="" className="w-[67px]" />
          <img src="/src/assets/comp4.png" alt="" className="w-[67px]" />
          <img src="/src/assets/comp5.png" alt="" className="w-[67px]" />
        </div>

        {/* Service card */}
        <div className="mt-20 md:w-1/2 mx-auto text-center">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
            Manager your entire community in single system
          </h2>
          <p className="text-neutralDGrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
          {services.map((element) => (
            <div
              key={element.id}
              className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                <img
                  src={element.image}
                  alt=""
                  className="bg-[#e8f5e9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl"
                />
                <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                  {element.title}
                </h4>
                <p className="text-sm text-neutralDGrey">
                  {element.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
