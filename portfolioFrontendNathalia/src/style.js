const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading1: "font-oswald font-regular xs:text-[64px] text-[60px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    heading2: "font-opensans font-regular xs:text-[36px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",/* based in Stuttgart */
    heading3: "font-opensans font-bold xs:text-[53px] text-[48px] text-white xs:leading-[76.8px] leading-[66.8px] w-full", /* moto building beautiful experiences */
    subtitles: "font-opensans font-bold xs:text-[26px] text-[20px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraphsmall: "font-bitter font-regular text-dimWhite text-[21px] leading-[30.8px]", /* las habilidades con los iconos */
    parragraph: "font-bitter font-regular text-dimWhite text-[26px] leading-[30.8px]",
    titlesmall: "font-bitter font-bold text-dimWhite text-[26px] leading-[30.8px]",/* this is used for the tools diagram*/
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;