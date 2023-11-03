import React from 'react';
import styles from "../style";
import { features } from "../constants";
import { multiculturalIcon } from '../assets';

const abilities = () => {
  return (
    <div className={`flex sm:flex-row flex-col gap-4 ss:px-20 md:px-32 lg:px-60 px-10 rounded-md overflow-auto gap-4`}>
      
        <div className={`flex-1 flex-grow flex-shrink border-2 rounded-md py-6 px-8`}>
          <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] text-justify`}> 
            <div className={`${styles.flexCenter} w-[70px] h-[70px] border-4 rounded-full mb-4`}>
              <img src={features[1].icon} alt="design-minded" className="w-[40px] h-[40px]"/>
            </div>
            <p className={`text-bitter text-extrabold text-xl text-white font-semibold`}>
              {features[0].title}
            </p>
            <p className={`text-opensans text-white`}>
              {features[0].content}
            </p>
          </div>
        </div>
        <div className={`flex-1 flew-grow flex-shrink border-2 rounded-md  py-6 px-8`}>
          <div className={`${styles.flexCenter} flex-col bg-primary text-justify`}> 
            <div className={`${styles.flexCenter} w-[70px] h-[70px] border-4 rounded-full mb-4`}>
              <img src={features[1].icon} alt="design-minded" className="w-[40px] h-[40px]"/>
            </div>
            <p className={`text-bitter text-extrabold text-xl text-white font-semibold`}>
              {features[1].title}
            </p> 
            <p className={`text-opensans text-white`}>
              {features[1].content}
            </p>
          </div>
        </div>
        <div className={`flex-1 flex-grow flex-shrink border-2 rounded-md py-6 px-8`}>
          <div className={`${styles.flexCenter} flex-col bg-primary text-justify`}> 
            <div className={`${styles.flexCenter} w-[70px] h-[70px] border-4 rounded-full mb-4`}>
              <img src={features[1].icon} alt="design-minded" className="w-[40px] h-[40px]"/>
            </div>
            <p className={`text-bitter text-extrabold text-xl text-white font-semibold`}>
              {features[2].title}
            </p>
            <p className={`text-qwigley text-white`}>
              {features[2].content}
            </p>
          </div>
        </div>

        

      
    </div>
  )
}

export default abilities