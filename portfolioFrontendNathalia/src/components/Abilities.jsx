import React from 'react';
import styles from "../style";
import { features } from "../constants";
import { Multiculti, Agile, DesignMinded } from '../assets';

const Abilities = () => {

  function generateIconComponent(featureIcon)
  {
    if (featureIcon === "agile" ) {
      return <Agile addedStyles={"dark:fill-white"}/>
    } else if (featureIcon === "designMinded") {
      return <DesignMinded addedStyles={"dark:fill-white"}/>
    } else if (featureIcon === "multicultural"){
      return <Multiculti addedStyles={"dark:fill-white"}/>
    }
    return null

  }

  return (
    <div className={`flex sm:flex-row flex-col gap-4 xs:px-4 ss:px-6 sm:px-8 md:px-20 lg:px-40 xl:px-42 p-6 overflow-auto`}>
      {features.map((feat, index) => 
        <div className={`flex-1 flex-grow flex-shrink shadow-custom rounded-lg py-6 ss:px-2 sm:px-2 md:px-4 px-8`}>
            <div className={`${styles.flexCenter} flex-col text-center `}> 
              <div className={`${styles.flexCenter} w-[70px] h-[70px] border-4 rounded-full mb-4`}>
                {generateIconComponent(feat.icon)} 
              </div>
              <p className={`font-bitter text-extrabold text-xl text-white font-semibold mb-2`}>
                {feat.title}
              </p>
              <p className={`font-opensans text-white`}>
                {feat.content}
              </p>
            </div>
          </div>
        )}
    </div>
  )
}

export default Abilities