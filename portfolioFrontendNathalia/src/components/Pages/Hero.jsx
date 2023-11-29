import React, { useContext } from "react";
import styles from "../../style";
import { profile_bewerbung_foto } from "../../assets";
import { Abilities, StyledButton } from "../index";
import { navLinks } from "../../constants";
import { MainContext } from "../../Context";

const Hero = () => {
  const { contactRef, heroRef } = useContext(MainContext);
  const buttonText = "Get in Touch!"
  return (
    <section id="home" ref={heroRef} className={`min-h-screen flex flex-col content-center items-center my-12`}>
      <div className={`grid gap-4 dark:bg-primary bg-offWhite ss:grid-cols-2`}>
        <div> 
          <p className="font-oswald font-semibold text-gradient text-lg leading-2">Frontend Developer</p>
          <p className="font-opensans font-semibold dark:text-white text-offDark text-lg leading-5 ">
              Hey there!<br /> I'm Nathalia Padrón.
          </p> 
          <p className="font-opensans font-light dark:text-white text-offDark ss:text-[18px] text-[12px]"> Based in Stuttgart, Germany.</p>
          <div className="ss:block hidden">
            < StyledButton reference={contactRef} parragraf={buttonText} width={`fit`} className="mt-10 font-[30px]"/>
          </div>
        </div>
        
        <div className={`relative`}>
          <img src={profile_bewerbung_foto} alt="profile photo" className={`min-w-[250px] h-[full] z-[5]`} />
          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
          <div className="ss:hidden flex justify-center items-center">
            < StyledButton reference={contactRef} parragraf={buttonText} width={`fit`} link={`#${navLinks[3].id}`} className="mt-4"/>
          </div>
        </div>  
      </div>
      < Abilities />
    </section>
  );
};

export default Hero;




