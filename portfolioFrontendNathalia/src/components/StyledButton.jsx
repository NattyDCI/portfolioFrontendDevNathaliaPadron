import React from 'react';
import styles from "../style"

const StyledButton = ({parragraf, icon,link, width}) => {

  return (
    <>
          {icon ? 
            <button className={`${styles.flexCenter} hover:ring hover:ring-offset-4 hover:ring-violet-600 px-4 w-${width} h-[60px] border-2 rounded-md mt-6 cursor-pointer`}>
              <img src={icon} className='w-[20px] h-[20px] mr-[20px]' alt="icon" /> 
              <a href={link} className=" font-bitter font-medium text-[18px] leading-[23.4px] text-white">
                  {parragraf}
              </a>        
            </button>
            : 
            <button className={`${styles.flexCenter} hover:ring hover:ring-offset-4 hover:ring-violet-600 px-4 w-${width} hover:bg-purple-300 h-[60px] border-2 rounded-md mt-6 cursor-pointer`}>
              <a href={link} className="font-bitter font-medium text-[18px] leading-[23.4px] text-white">
                  {parragraf}
              </a>
            </button>
          } 
    
    </>
  )
}

export default StyledButton;