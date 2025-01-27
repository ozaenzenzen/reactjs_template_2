import React, { useEffect, useState } from "react";
import logo from "../assets/logo3.png";
import { Link } from "react-scroll";

import { FaXmark } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Services", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        } `}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-10 inline-block items-center"
            />
            <span className="text-[#263238]">Fauzan Lab</span>
          </a>

          {/* Nav Items For Large Devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map((element) => (
              <Link
                activeClass={true}
                to={element.path}
                spy={true}
                smooth={true}
                offset={-100}
                key={element.path}
                className=" nav-link block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium"
              >
                {element.link}
              </Link>
            ))}
          </ul>

          {/* Button for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray900"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Sign Up
            </button>
          </div>

          {/* Menu Button for mobile devices */}
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 " />
              ) : (
                <RxHamburgerMenu className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"
          }`}
        >
          {navItems.map((element) => (
            <Link
              activeClass={true}
              to={element.path}
              spy={true}
              smooth={true}
              offset={-100}
              key={element.path}
              className=" nav-link block text-base text-white hover:text-brandPrimary first:font-medium"
            >
              {element.link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
