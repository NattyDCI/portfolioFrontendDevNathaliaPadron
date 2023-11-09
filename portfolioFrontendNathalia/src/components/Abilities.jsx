import React from 'react';
import styles from "../style";
import { features } from "../constants";

const abilities = () => {
  return (
    <div className={`flex sm:flex-row flex-col gap-4 xs:px-4 ss:px-6 sm:px-8 md:px-20 lg:px-40 xl:px-42 px-6 rounded-md overflow-auto`}>
      {features.map((feat, index) => 
        <div className={`flex-1 flex-grow flex-shrink border-2 rounded-md py-6 ss:px-2 sm:px-2 md:px-4 px-8`}>
            <div className={`${styles.flexCenter} flex-col bg-primary text-center`}> 
              <div className={`${styles.flexCenter} w-[70px] h-[70px] border-4 rounded-full mb-4`}>
                <img src={feat.icon} alt="design-minded" className="w-[40px] h-[40px]"/>
              </div>
              <p className={`text-bitter text-extrabold text-xl text-white font-semibold mb-2`}>
                {feat.title}
              </p>
              <p className={`text-qwigley text-white`}>
                {feat.content}
              </p>
            </div>
          </div>
        )}
    </div>
  )
}

export default abilities