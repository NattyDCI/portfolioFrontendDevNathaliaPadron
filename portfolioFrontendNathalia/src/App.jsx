import React from 'react';
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

import { useContext } from "react";
import { MainContext } from "./Context";

const App = () => {

  const contextValue = useContext(MainContext);

  if (!contextValue) {
  // Handle the case when the context value is null or undefined
    return <div>No heroRef available</div>;
  }

  const { heroRef } = contextValue;

  return (
    
    <div className='dark:bg-primary bg-white w-full overflow-hidden wrapper scroll-smooth'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
           < Navbar />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          
        </div>
      </div>
      
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          < About />
          < ProjectSection />
          < Contact />
          < Footer />
        </div>
      </div>


    </div>
  )
}

export default App