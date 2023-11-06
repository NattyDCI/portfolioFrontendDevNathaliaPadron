import React from 'react';
import styles from "../style";
import { features } from "../constants";

const abilities = () => {
  return (
    <div className={`flex sm:flex-row flex-col gap-4 ss:px-20 md:px-32 lg:px-60 px-10 rounded-md overflow-auto gap-4`}>
      {features.map((feat, index) => 
        <div className={`flex-1 flex-grow flex-shrink border-2 rounded-md py-6 px-8`}>
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