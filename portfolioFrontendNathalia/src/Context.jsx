import React from 'react';
import { createContext, useRef } from 'react';


export const MainContext = createContext();

export function ContextProvider({ children }) {
    const heroRef = useRef(null);
    const workRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    
    let options = { behaviour: "smooth", block:"center" };

    const heroScrollHandler = (currentRef) => {
        if (currentRef.current.className === "wrapper")
          options = { ...options, block: "start" };
    
        currentRef.current.scrollIntoView(options);
      };

  return (
    <MainContext.Provider
     value={{
        heroRef,
        workRef,
        aboutRef,
        contactRef,
        heroScrollHandler,
     }}
    >
     {children}
    </MainContext.Provider>
  );
}

