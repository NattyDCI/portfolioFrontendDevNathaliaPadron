import React from "react";
import styles from "../../style";
import { profile_bewerbung_foto } from "../../assets";
import { Abilities, Button } from "../index";

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col justify-between items-center mb-5`}>
      <div className={` ${styles.flexCenter} sm:flex-row flex-col ss:px-16 px-4 mt-20`}>
        <h1 className="font-oswald font-semibold ss:text-[50px] text-[45px] text-white leading-[45px] w-full">
          Junior  <br/>
        <span className="text-gradient">Frontend Developer</span>
        <p className={`font-bitter font-semibold ss:text-[24px] text-[16px] ss:leading-[40px] leading-[20px] mt-5`}>
          Hey there! <br />
          I'm Nathalia Padrón. <br className={`md:hidden`} />
          Based in Stuttgart, Germany.
        </p>
        < Button />
        </h1>  
        <div className={`relative xl:ml-5`}>
          <img src={profile_bewerbung_foto} alt="" className={`w-[250px] h-[100%] relative z-[5] sm:mb-0 mb-10 sm:mt-0 mt-2`} />
          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>  
      </div>

      <div className={`md:py-5 py-12`}>
        < Abilities />
      </div>

      
    </section>
  );
};

export default Hero;





/*import React from "react";
import styles from "../../style";
import { profile_bewerbung_foto, agile, design_minded_icon, multiculturalIcon } from "../../assets";
import JobPosition from '../JobPosition';
import Trademark from '../Trademark';
import ProjectCards from '../ProjectCards';
import Button from '../Button';
import Abilities from '../Abilities';


const Hero = () => {
    <section id="home" className={`flex
    md:flex-row flex-col ${styles.paddingY}`}>
        <p className="text-white text-[24px">what do you mean</p>
        <div className={`flex-1 ${styles.flexStart}
        flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row 
            items-center py-[6px] px-4 bg-discount-gradient
            rounded-[10px] mb-2 object-fit-contain">
                <img src={agile} 
                alt="bewerbung Foto"
                className="w-[128px] h-[128px]" />
            </div>

        </div>
        
    </section>
}

export default Hero */