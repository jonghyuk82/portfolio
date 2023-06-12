/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoPerson from "../images/personImage.jpg";
import { motion } from "framer-motion";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(localStorage.theme);
  const activeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggleMenu = () => {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="navbar bg-base-100 sm:container sm:mx-auto"
    >
      <div className="z-10 max-w-screen justify-between xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        <div className="navbar-start flex w-64 block">
          <Link
            to="/"
            className="sm:flex sm:justify-between sm:items-center py-6"
          >
            <div className="flex-initial w-10 rounded-full">
              <img
                src={logoPerson}
                className="w-10 rounded-full"
                alt="Jonghyuk Lee"
              />
            </div>
            <div className="block text-xl text-left font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 sm:py-2 ml-3 mt-1 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
              Jonghyuk Lee
            </div>
          </Link>
        </div>

        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1 font-general-medium">
            <li>
              <Link
                to="/projects"
                className="block text-left text-lg text-primary-dark hover:text-sky-400 dark:text-ternary-light hover:text-secondary-dark dark:hover:text-sky-400  sm:mx-4 mb-2 sm:py-2"
                aria-label="Projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                aria-label="About Me"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                aria-label="Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <a>Item 1</a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>;
