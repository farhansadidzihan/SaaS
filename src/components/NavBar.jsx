import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const links = [
    {
      id: 1,
      link: "Products",
    },
    {
      id: 2,
      link: "Solutions",
    },
    {
      id: 3,
      link: "Developments",
    },
  ];

  const handleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleSignupModal = () => {
    setShowSignupModal(!showSignupModal);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div className="flex items-center">
        <img className="mr-3 mb-2 ml-8 h-20 w-20" src={logo} alt="Logo" />
        <h1 className="text-6xl cursor-pointer"> FSZ & Co </h1>
      </div>

      <ul className="hidden md:flex items-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-white hover:underline"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default NavBar;
