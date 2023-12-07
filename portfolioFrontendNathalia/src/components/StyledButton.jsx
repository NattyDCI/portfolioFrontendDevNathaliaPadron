import React, { useContext } from 'react';
import styles from "../style"
import { MainContext } from '../Context';

const StyledButton = ({parragraf, icon, link, width, reference}) => {

const { heroScrollHandler } = useContext(MainContext); 

  return (
    <>
          {icon ? 
            <button onClick={() => heroScrollHandler(reference)}className={`${styles.flexCenter} text-md text-white font-bitter font-semibold  hover:bg-purple-600 px-4 w-${width} h-[40px] bg-purple-400 border-2 border-solid dark:border-offWhite border-purple-900 rounded-sm mt-6 cursor-pointer `}>
              <img src={icon} className='w-[20px] h-[20px] mr-2' alt="icon" /> 
              {parragraf}     
            </button>
            : 
            <button onClick={() => heroScrollHandler(reference)} className={`${styles.flexCenter}  text-white text-md font-bitter font-semibold  hover:bg-purple-600 px-4 w-${width} h-[40px] bg-purple-400 rounded-sm border-2 border-solid dark:border-offWhite border-purple-900 mt-6 cursor-pointer `}>
                {parragraf}
            </button>
          } 
    
    </>
  )
}

export default StyledButton;