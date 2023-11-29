import React, { useContext } from 'react';
import Skills from '../Skills';
import { about, logos } from "../../constants"
import styles, { layout } from '../../style'; 
import { MainContext } from "../../Context";



const About = () => {

  const { aboutRef } = useContext(MainContext)
  

  return (
    <div ref={aboutRef}className={`max-h-screen flex-col mb-24 w-full items-center justify-center pt-20`}>
      <div id="about" className='pt-5'>
        <h1  className='dark:text-white text-offDark border-t-4 mx-auto border-mainPurple w-fit text-center text-4xl font-opensans font-bold'>
            ABOUT
        </h1> 
      </div>
      <div className={`${layout.section} ${styles.flexCenter} `}>
  
          <div className={`flex w-full flex-col items-center`}>
            <div className='flex flex-grow flex-shrink flex-col w-[80%] '>
              <p className=' dark:text-white text-offDark'>
                {about[1].content} 
                <span className={`italic font-bold`}> {about[2].content}</span>
                {about[3].content}
              </p>
              <br />
              <p className='dark:text-white text-offDark'>
                {about[4].content}
                <span className={`italic font-bold`}> {about[5].content}</span>
                {about[6].content}
                <span className={`italic font-bold`}>{about[7].content}</span>
                {about[8].content}{about[9].content}
                <span className={`italic font-bold`}>{about[10].content}</span>
                {about[11].content}
              </p>
              <br />
              <p className='dark:text-white text-offDark'>
                {about[12].content}
                <span className={`italic font-bold`}> {about[13].content}</span>
                {about[14].content}
                <span className={`italic font-bold`}>{about[15].content}</span>
                {about[16].content}
                <span className={`italic font-bold`}>{about[17].content}</span>
                {about[18].content}
                <span className={`italic font-bold`}>{about[19].content}</span>
                {about[20].content}
              </p>
              <br />
              <p className='dark:text-white text-offDark'>
              {about[21].content}
              <span className={`italic font-bold`}>{about[22].content}</span>
              </p>
              
            </div>
            <div className="flex flex-wrap sm:w-full mt-2 justify-center p-3 w-[70%]">
                {logos.map((icon, index) =>  
                
                  <img src={icon.logo} alt={icon.name} key={icon.name} className="w-14 h-[100%] m-2"/> 
                
                    )}
            </div>
            
          </div>
            
      
      </div>
    </div>
  );
}



export default About;