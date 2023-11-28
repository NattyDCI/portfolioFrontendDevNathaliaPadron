import React from 'react';
import { ProjectCard }  from '../index';
import { Projects, Projects2 } from "../../constants";
import { MainContext } from "../../Context";
import { useState, useContext } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ProjectSection = () => {
  const { workRef } = useContext(MainContext);
  const [switchWork, setSwitchWork] = useState(true);

  return (
    <div ref={workRef} className={`flex-col w-["100%"] items-center justify-center  md:pt-[20rem] lg:pt-[40rem] pt-[48rem]`}>
      
        <div id="work" className=' pt-5'>
          <div className='dark:text-white text-offDark text-center mx-auto text-4xl border-t-4  border-mainPurple  w-fit font-opensans font-bold' >
            <p>WORK</p>
          </div>
        </div>
        <div className='relative flex flex-column items-center justify-center content-center z-10 drop-shadow-lg '>
        
          {switchWork ? (
            <div className="bg-grey-900 w-[full] mt-6 mb-60 justify-center">
            <div className="w-[90%] max-w-7xl mx-auto relative flex flex-wrap gap-6 pb-16">
          
              {Projects.map((project, index) => {
                return (
                  < ProjectCard key={project.id} title={project.title} img={project.img} url={project.url} repo={project.repo} codepen={project.codepen} para={project.para}>
                  </ProjectCard>
                  )
                }
              )}
            </div>
            </div>
          ) : <div className="bg-grey-900 w-[full] mt-6 mb-60 justify-center items-center">
          <div className=" w-[90%] max-w-7xl mx-auto relative flex flex-wrap gap-6 pb-16">
        
            {Projects2.map((project, index) => {
              return (
                < ProjectCard title={project.title} img={project.img} url={project.url} repo={project.repo} para={project.para}>
                </ProjectCard>
                )
              }
            )}
          </div>
          </div>
          }
          <div className="w-[95%] max-w-[125rem] text-5xl flex justify-between absolute top-[41%] translate-x[-50%] z-10 cursor-pointer">
          <AiOutlineLeft
            className="arrow dark:text-white text-offDark text-[34px]"
            onClick={() => setSwitchWork(!switchWork)}
          />
          <AiOutlineRight
            className="arrow dark:text-white text-offDark text-[34px]"
            onClick={() => setSwitchWork(!switchWork)}
          />
        </div>
          
        
      </div>
      
    </div>
  )
}

export default ProjectSection;