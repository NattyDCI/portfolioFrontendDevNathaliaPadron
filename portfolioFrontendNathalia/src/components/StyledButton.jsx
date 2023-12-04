import React, { useContext } from 'react';
import styles from "../style"
import { MainContext } from '../Context';

const StyledButton = ({parragraf, icon, link, width, reference}) => {

const { heroScrollHandler } = useContext(MainContext); 

  return (
    <>
          {icon ? 
            <button onClick={() => heroScrollHandler(reference)}className={`${styles.flexCenter} text-md text-white font-bitter font-semibold  hover:bg-purple-600 px-4 w-${width} h-[50px] bg-purple-500 rounded-md mt-6 cursor-pointer focus:ring focus:ring-purple-300`}>
              <img src={icon} className='w-[20px] h-[20px] mr-2' alt="icon" /> 
              {parragraf}     
            </button>
            : 
            <button onClick={() => heroScrollHandler(reference)} className={`${styles.flexCenter}  text-white text-md font-bitter font-semibold  hover:bg-purple-600 px-4 w-${width} h-[50px] bg-purple-500 rounded-md mt-6 cursor-pointer focus:ring focus:ring-purple-300`}>
                {parragraf}
            </button>
          } 
    
    </>
  )
}

export default StyledButton;