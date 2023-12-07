import React from 'react'

import {
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Ripple });
  

const BackToTop = ({getStrokeColor, addedStyles}) => {

    const mybutton = document.getElementById("btn-back-to-top");

    const scrollFunction = () => {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          mybutton.classList.remove("hidden");
        } else {
          mybutton.classList.add("hidden");
        }
      };
      
      const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };   

  return (

    //<button id="btn-back-to-top" onClick={backToTop}></button>
    <svg id="btn-back-to-top" onClick={backToTop} fill="none"  stroke={getStrokeColor()}
 className={addedStyles} viewBox="0 0 24 24" stroke-width="1.5" width="40" height="40">
        <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
    </svg>
  )
}

export default BackToTop