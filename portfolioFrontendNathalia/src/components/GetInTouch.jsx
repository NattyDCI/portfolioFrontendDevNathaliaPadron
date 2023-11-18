import React from 'react';
import styles from "../style"

const getInTouch = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[60px] border-2 bg-blue-gradient rounded-md mt-6 p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%]`}>
        <p className="font-bitter font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get in touch!</span> 
        </p>
      </div>
    </div>
  )
}

export default getInTouch;