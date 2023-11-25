import React, { useContext } from 'react';
import styles from "../style"
import { MainContext } from '../Context';

const StyledButton = ({parragraf, icon, link, width, reference}) => {

const { heroScrollHandler } = useContext(MainContext); 

  return (
    <>
          {icon ? 
            <button onClick={() => heroScrollHandler(reference)} className={`${styles.flexCenter} hover:ring hover:ring-offset-4 hover:ring-fuchsia-600 px-4 w-${width} h-[60px] border-2 rounded-md mt-6 cursor-pointer`}>
              <img src={icon} className='w-[20px] h-[20px] mr-[20px]' alt="icon" /> 
              {parragraf}     
            </button>
            : 
            <button onClick={() => heroScrollHandler(reference)} className={`${styles.flexCenter} hover:ring-4 hover:ring-offset-4 hover:ring-fuchsia-600 px-4 w-${width} bg-mainPurple hover:bg-purple-300 h-[60px] border-2 rounded-md mt-6 cursor-pointer`}>
                {parragraf}
            </button>
          } 
    
    </>
  )
}

export default StyledButton;