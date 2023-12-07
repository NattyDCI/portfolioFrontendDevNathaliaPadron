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
    <div className={`grid xs:gap-6 gap-2 grid-cols-3 mt-6 max-w-4xl xs:w-[95%] sm:w-[98%] md:w-[90%] lg:w-[75%] w-70% mt-[4rem]`}>
      {features.map((feat, index) => 
        <div key={feat.id} className={`border-2  dark:border-offWhite dark:bg-primary bg-slate-100 rounded-sm xs:p-4 p-2`}>
            <div className={`${styles.flexCenter} flex-col text-center `}> 
              <div className={`${styles.flexCenter} xs:w-[50px] xs:h-[50px] w-[30px] h-[30px] `}>
                {generateIconComponent(feat.icon)} 
              </div>
              <p className={`font-oswald text-semibold xs:text-sm ss:text-lg text-sm dark:text-white text-offDark font-semibold mb-2`}>
                {feat.title}
              </p>
              <p className={`ss:block hidden font-opensans font-normal xs:text-sm ss:text-md text-sm dark:text-white text-offDark`}>
                {feat.content}
              </p>
            </div>
          </div>
        )}
    </div>
  )
}

export default Abilities