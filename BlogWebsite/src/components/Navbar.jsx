import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import Modal from "./Modal";

const Navbar = () => {
  // Defines a code for the open or closed Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModelOpen, setisModelOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavItems = [
    {
      path: "/home",
      link: "Home",
    },
    {
      path: "/about",
      link: "About",
    },
    {
      path: "/services",
      link: "Services",
    },
    {
      path: "/blogs",
      link: "Blogs",
    },
    {
      path: "/contactus",
      link: "Contact Us",
    },
  ];

  const openModel = () => {
    setisModelOpen(true);
  };
  const closeModel = () => {
    setisModelOpen(false);
  };

  return (
    <header className="  bg-black text-white fixed top-0 left-0 right-0 ">
      <nav className="Navbar flex justify-between px-5 py-2   bg-black items-center  ">
        <a href="/" className="text-xl font-bold text-white">
          Wealth <span className="text-orange-500">Wave</span>{" "}
        </a>

        <ul className="lg:flex gap-8 text-white px-4 py-3 text-xl justify-between hidden  md:flex mx-auto">
          {NavItems.map(({ path, link }, index) => (
            <li key={path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="lg:flex hidden justify-end items-center gap-4 text-white ml-5">
          <a href="" className="hover:text-blue-700 text-2xl ">
            <FaTwitter />
          </a>
          <a href="" className="hover:text-blue-800 text-2xl">
            <FaFacebook />
          </a>
          <button
            onClick={openModel}
            className="bg-orange-500 py-2 px-2  rounded hover:text-orange-500 hover:bg-white  transition-all duration-200 ease-in"
          >
            Log In
          </button>
        </div>

        {/* Our Model Goes Here */}

        <Modal isOpen={isModelOpen} onClose={closeModel} />

        {/* Mobile Menu Button, Display Mobile Screen``      <div></div> */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-xl px-5  py-5 flex items-center justify-center  w-16 h-16 md:hidden"
          >
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu  */}
      </nav>

      <div>
        <ul
          className={` md:hidden gap-12 text-lg block space-y-4 bg-white color mt-14 px-4 py-6 ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {NavItems.map(({ path, link }, index) => (
            <li key={path} className="text-black">
              <NavLink onClick={toggleMenu} to={path}>
                {" "}
                {link}
              </NavLink>{" "}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
