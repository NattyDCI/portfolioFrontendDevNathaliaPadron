import React from "react";
import { useState, useContext, useRef } from "react";

import { navLinks } from "../constants";
import { moonIcon } from "../assets";
import { closeIcon } from "../assets";
import { hamburguerMenuIcon } from "../assets";
import { MainContext } from "../Context";
import { Moon } from "../assets";



import styles from "../style";
import { useEffect } from "react";

const Navbar = () => {
  
  const {
    heroRef,
    workRef,
    aboutRef,
    contactRef,
    scrollHandler
  } = useContext(MainContext);

  const [toggle, setToggle] = useState(false);  
   
  function toggleTheme() {
    document.documentElement.classList.toggle("dark")

  }


  return (
    <nav id="home" className="w-full flex py-6 justify-between items-center navbar dark:bg-primary bg-white">
      <p className="font-qwigley text-[24px] dark:text-white text-primary">Nathalia Padron</p>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li onClick={toggleTheme}>
        <Moon addedStyles={"dark:fill-white"}/>
        </li>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-bitter text-[20px] font-semibold cursor-pointer ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10" 
            } `}
          >
            <a href={`#${nav.id}`} className="dark:text-white text-primary">
              {nav.title}
            </a>
          </li>
        ))}

      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? closeIcon : hamburguerMenuIcon}
          alt="menu"
          className="w-[28px] h-[28px] 
        object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6
        bg-black-gradient
        absolute top-20 right-0 mx-4
        my-2 min-w-[140px] rounded-xl 
        sidebar`}
        >
          <ul
            className="list-none flex 
          justify-end items-center 
          flex-1 flex-col"
          >
            <li>
              <img onClick={toggleTheme} src={moonIcon}/>
              
            </li>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` cursor-pointer text-white font-bitter text-[16px] font-semibold ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`} className="text-white">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav> /* html semantic nav tag*/
  );
};

export default Navbar;
