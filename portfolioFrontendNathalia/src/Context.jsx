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

    let options = { behavior: "smooth", block:"center" };

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

