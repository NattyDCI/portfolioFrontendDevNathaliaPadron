import React from "react";
import styles from "../../style";
import { personIcon, profile_bewerbung_foto } from "../../assets";
import { Abilities, StyledButton } from "../index";
import { navLinks } from "../../constants";

const Hero = () => {
  const buttonText = "Get in Touch"
  return (
    <section id="home" className={`w-full flex flex-col justify-between items-center mb-5`}>
      <div className={` ${styles.flexCenter} sm:flex-row flex-col ss:px-16 px-4 mt-20 w-[85%]`}>
        <h1 className="font-oswald font-semibold ss:text-[50px] text-[45px] text-white leading-[50px] w-full">
          Junior  <br/>
        <span className="text-gradient">Frontend Developer</span>
        <p className={`font-bitter ss:text-[20px] text-[12px] ss:leading-[26px] leading-[20px] mt-5`}>
          Hey there! <br />
          I'm Nathalia Padrón. <br className={`sm:block hidden `} />
          Based in Stuttgart, Germany.
        </p>
        <div className="md:block hidden">
          < StyledButton parragraf={buttonText} width={`fit`} icon={personIcon} link={`#${navLinks[3].id}`} className="mt-10"/>
        </div>  
        </h1>  
        <div className={`relative xl:ml-5`}>
          <img src={profile_bewerbung_foto} alt="" className={`min-w-[250px] h-[100%] relative z-[5] sm:mb-0 mb-10 sm:mt-0 mt-2`} />
          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
          <div className="md:hidden block flex justify-center items-center">
            < StyledButton parragraf={buttonText} width={`fit`} icon={personIcon} link={`#${navLinks[3].id}`} className="mt-10"/>
           </div>
        </div>  
      </div>
      <div className={`md:py-5 py-12`}>
        < Abilities />
      </div> 
    </section>
  );
};

export default Hero;




