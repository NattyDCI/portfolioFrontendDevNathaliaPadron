import React from 'react';
import { createContext, useRef, useState } from 'react';

export const MainContext = createContext();

export function ContextProvider({ children }) {
    const heroRef = useRef(null);
    const workRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    
    const [toggle, setToggle] = useState(false);
    const [switchWork, setSwitchWork] = useState(true);
    
    const heroScrollHandler = (currentRef) => {
      let offsetTop = currentRef.current.getBoundingClientRect().top + window.scrollY;
    
      if (currentRef.current.className === "wrapper") {
        // Adjust offset for "start" alignment
        offsetTop -= currentRef.current.style.paddingTop || 0;
      }
    
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    };

  return (
    <MainContext.Provider
     value={{
        heroRef,
        workRef,
        aboutRef,
        contactRef,
        heroScrollHandler,
        setToggle,
        toggle,
        switchWork,
        setSwitchWork
     }}
    >
     {children}
    </MainContext.Provider>
  );
}

