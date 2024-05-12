import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidbar";
import { navLinks } from "./navlink";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const handleLinkMouseEnter = (index) => {
    setHoveredLink(index);
  };

  const handleLinkMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <header className="top-0 fixed w-full z-99">
      <div className="px-4 lg:px-16 py-6 bg-gray-800 rounded ">
        <nav className="flex justify-between">
          <div className="text-white text-2xl">
            <Link to="/">
              <span>
                <i className="fa-solid fa-outdent mr-3"></i>
              </span>
              <span className="text-red-700">CBST </span>
              <span className="text-green-500">PHARMACY</span>
            </Link>
          </div>
          <div className="">
            <ul className="flex justify-between space-x-6 text-sm text-white font-bold ">
              {navLinks.map((link, index) => (
                <li
                  className={`hidden lg:block ${
                    link.showDropdown && hoveredLink === index ? "group" : ""
                  }`}
                  key={index}
                  onMouseEnter={() => handleLinkMouseEnter(index)}
                  onMouseLeave={handleLinkMouseLeave}
                >
                  {link.showDropdown ? (
                    <span className="cursor-not-allowed">
                      {link.text}
                      <i className="fa-solid fa-chevron-down ml-1 text-xs"></i>
                    </span>
                  ) : (
                    <Link
                      to={link.to}
                      className="nav-link hover:border-b-2 hover:text-gray-400 border-b border-transparent transition duration-200 ease-in-out hover:border-white pb-1"
                    >
                      {link.text}
                    </Link>
                  )}
                  {link.showDropdown && hoveredLink === index && (
                    <div className="absolute bg-gray-900 text-white mt-2 p-2 rounded-lg">
                      {/* Dropdown content */}
                      <ul>
                        {link.dropdownLinks.map((dropdownLink, subIndex) => (
                          <li
                            key={subIndex}
                            className="my-4 hover:text-gray-500 p-2"
                          >
                            <Link to={dropdownLink.to}>
                              {dropdownLink.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
              <Link to="/login">
                <li className="flex">
                  <button className="py-1 hover:scale-105 text-white font-semibold  px-4 border border-gray-400 rounded shadow">
                     Login
                  </button>
                </li>
              </Link>
              <li
                className="text-green-500 block lg:hidden"
                onClick={toggleSidebar}
              >
                <i className="fa-solid fa-bars"></i>
              </li>
            </ul>
          </div>
        </nav>
        {/* mobile menu Sidebar */}
        <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar} />
      </div>
    </header>
  );
};

export default Navbar;
