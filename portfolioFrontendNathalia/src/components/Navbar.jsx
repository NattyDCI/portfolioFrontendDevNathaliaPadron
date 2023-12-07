import React from "react";
import { useState, useContext, useRef } from "react";

import { navLinks } from "../constants";
import { CloseIcon, HamburgerIcon } from "../assets";
import { MainContext } from "../Context";
import { Moon } from "../assets";
import styles from "../style";
import { logo_Nat_Website } from "../assets";


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
    document.documentElement.classList.toggle("dark");
    window.dispatchEvent(new Event('darkModeChange'));
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
    <nav id="home" className="navbar w-full flex justify-between items-center py-3 dark:bg-primary ">
      <img src={logo_Nat_Website} className={`w-[90px] h-[full]`}/>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li onClick={toggleTheme} className="cursor-pointer">
        <Moon addedStyles={"dark:fill-white"}/>
        </li>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-opensans font bold text-[20px] font-semibold cursor-pointer ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10" 
            } `}
          >
            <button onClick={() => heroScrollHandler(referenceGenerator(nav.id))} 
            className={`${styles.flexCenter} text-xl dark:text-offWhite text-offDark  hover:bg-purple-300 w-full h-[60px] cursor-pointer right-4 p-2`}> 
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
        my-2 min-w-[200px] min-h-[300px] rounded-sm 
        sidebar items-center border-2 dark:border-slate-700 border-slate-80 border-pink-80`}
        >
          <ul
            className="list-none flex 
          justify-end items-center 
          flex-1 flex-col"
          >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` cursor-pointer dark:text-offWhite text-offDark font-opensans text-lg font-semibold ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <button onClick={() => heroScrollHandler(referenceGenerator(nav.id))} 
                  className={`${styles.flexCenter} text-xl dark:text-white text-offDark w-full h-[60px] cursor-pointer right-4`}> 
                    {nav.title}     
                </button>
              </li>
            ))}
            <li onClick={toggleTheme} className="cursor-pointer" > 
            <Moon addedStyles={"dark:fill-white fill-offDark mt-4"}/>
            </li>
          </ul>
        </div>
      </div>

    </nav> /* html semantic nav tag*/
  );
};

export default Navbar;
