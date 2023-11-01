import React from 'react';
import styles from "../style";
import { features } from "../constants";
import { multiculturalIcon } from '../assets';

const abilities = () => {
  return (
    <div className={`${styles.flexCenter} text-center items-stretch w-[100%] h-[100%] sm:flex-row flex-col rounded-md sm:px-10 px-20 md:px-32 l:px-40`}>
      
        <div className={`flex-1 border-2 rounded-md w-[100%] h-[100%] sm:mr-6 mb-6 py-6 px-3`}>
          <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] text-justify`}> 
            <img src={features[0].icon} alt="design-minded" className="w-[40px] h-[40px]"/>
            <p className={`text-opensans text-white`}>
              {features[0].content}
            </p>
          </div>
        </div>
        <div className={`flex-1 border-2 rounded-md w-[100%] h-[100%] sm:mr-6 mb-6 py-6 px-3`}>
          <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] text-justify`}> 
            <img src={features[1].icon} alt="design-minded" className="w-[40px] h-[40px]"/>
            <p className={`text-opensans text-white`}>
              {features[1].content}
            </p>
          </div>
        </div>
        <div className={`flex-1 border-2 rounded-md w-[100%] h-[100%] sm:mr-6 mb-6 py-6 px-3`}>
          <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] text-justify`}> 
            <img src={features[2].icon} alt="design-minded" className="w-[40px] h-[40px]"/>
            <p className={`text-qwigley text-white`}>
              {features[2].content}
            </p>
          </div>
        </div>

        

      
    </div>
  )
}

export default abilities