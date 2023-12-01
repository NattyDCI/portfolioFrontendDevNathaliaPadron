import React from 'react';
import styles from "../style";
import { features } from "../constants";
import { Multiculti, Agile, DesignMinded } from '../assets';

const Abilities = () => {

  function generateIconComponent(featureIcon)
  {
    if (featureIcon === "agile" ) {
      return <Agile addedStyles={"dark:fill-white fill-offDark"}/>
    } else if (featureIcon === "designMinded") {
      return <DesignMinded addedStyles={"dark:fill-white fill-offDark"}/>
    } else if (featureIcon === "multicultural"){
      return <Multiculti addedStyles={"dark:fill-white fill-offDark"}/>
    }
    return null  }

  return (
    <div className={`grid gap-6 sm:grid-cols-3 mt-12 max-w-7xl xs:w-[95%] sm:w-[98%] md:w-[90%] lg:w-[75%] w-70%`}>
      {features.map((feat, index) => 
        <div key={feat.id} className={`border-2 border-offWhite dark:bg-primary bg-gray-100 rounded-xl p-6`}>
            <div className={`${styles.flexCenter} flex-col text-center`}> 
              <div className={`${styles.flexCenter} w-[70px] h-[70px] mb-3`}>
                {generateIconComponent(feat.icon)} 
              </div>
              <p className={`font-oswald text-semibold text-lg dark:text-white text-offDark font-semibold mb-2`}>
                {feat.title}
              </p>
              <p className={`font-opensans font-normal text-sm dark:text-white text-offDark`}>
                {feat.content}
              </p>
            </div>
          </div>
        )}
    </div>
  )
}

export default Abilities