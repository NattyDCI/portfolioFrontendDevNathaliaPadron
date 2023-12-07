import React, { useState, useEffect } from 'react';
import styles from './style';
import { 
  Navbar,
  Hero,
  About,
  ProjectSection,
  Contact,
  Footer,
  Abilities
} from "./components";

import { useContext, heroRef } from "react";
import { MainContext } from "./Context";
import { BackToTop } from './assets';

const App = () => {
  const [darkMode, setDarkMode] = useState(document.documentElement.classList.contains("dark"));
  
 
  useEffect(() => {
    const updateDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Listen for changes to the dark mode class
    window.addEventListener('darkModeChange', updateDarkMode);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('darkModeChange', updateDarkMode);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount


  const { heroRef } = useContext(MainContext);

  return (
    
    <div ref={heroRef} className='wrapper dark:bg-primary bg-offWhite w-full overflow-hidden wrapper scroll-smooth '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
           < Navbar />
            
        </div>
      </div>
      <div className='xs:block hidden'>
        <hr className="flex-grow border-t dark:border-gray-300 border-black z-1"></hr>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          
        </div>
      </div>
      
      <div className={`dark:bg-primary bg-offWhite ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          < ProjectSection />
          < About />
          < Contact />
          < Footer />
          <div className='fixed bottom-[20px] right-[20px]'>
              <BackToTop getStrokeColor={ () => darkMode ? "white" : "grey"}/>
            </div>
        </div>
      </div>


    </div>
  )
}

export default App