import React from "react";
import { useState, useContext, useRef } from "react";

import { navLinks } from "../constants";
import { CloseIcon, HamburgerIcon } from "../assets";
import { MainContext } from "../Context";
import { Moon } from "../assets";
import styles from "../style";


const Navbar = () => {
  
  const {
    heroRef,
    workRef,
    aboutRef,
    contactRef,
    heroScrollHandler,
    toggle
  } = useContext(MainContext);

 
   
  function toggleTheme() {
    document.documentElement.classList.toggle("dark")

  }
  function referenceGenerator (navId){
      if (navId === "home") {
        return heroRef
      } else if (navId === "contact"){
        return contactRef
      } else if (navId === "about"){
        return aboutRef
      } else if (navId === "work") {
        return workRef
      }
      return null
  }

  return (
    <nav id="home" className="navbar w-full flex justify-between items-center py-3 dark:bg-primary bg-offWhite">
      <p className="font-qwigley text-[24px] dark:text-white text-primary flex-nowrap">Nathalia Padron</p>
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
            <button onClick={() => heroScrollHandler(referenceGenerator(nav.id))} 
            className={`${styles.flexCenter} text-xl dark:text-white text-offDark font-bitter font-semibold  hover:purple-600 w-full h-[60px]cursor-pointer hover:ring right-4 p-3 hover:ring-purple-300`}> 
              {nav.title}     
            </button>
          </li>
        ))}

      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? <CloseIcon addedStyles="dark:fill-offWhite fill-offDark"/> : <HamburgerIcon addedStyles="dark:fill-offWhite fill-offDark"/>}
            
        <div
          className={`${toggle ? "flex" : "hidden"} p-6
          dark:bg-primary bg-offWhite
        absolute z-[10] top-20 right-0 mx-4
        my-2 min-w-[200px] min-h-[300px] rounded-xl 
        sidebar items-center shadow-custom`}
        >
          <ul
            className="list-none flex 
          justify-end items-center 
          flex-1 flex-col"
          >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` cursor-pointer dark:text-offWhite text-offDark font-bitter text-[16px] font-semibold ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <button onClick={() => heroScrollHandler(referenceGenerator(nav.id))} 
                  className={`${styles.flexCenter} text-xl dark:text-white text-offDark font-bitter font-semibold w-full h-[60px]cursor-pointer hover:ring right-4 hover:ring-purple-300`}> 
                    {nav.title}     
                </button>
              </li>
            ))}
            <li onClick={toggleTheme}> 
            <Moon addedStyles={"dark:fill-white fill-offDark mt-4"}/>
            </li>
          </ul>
        </div>
      </div>

    </nav> /* html semantic nav tag*/
  );
};

export default Navbar;
