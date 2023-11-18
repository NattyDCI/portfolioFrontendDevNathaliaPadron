import React from 'react';
import { ProjectCard }  from '../index';
import { Projects, Projects2 } from "../../constants";
import { MainContext } from "../../Context";
import { useState, useContext } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ProjectSection = () => {
  const { workRef } = useContext(MainContext);
  const [switchWork, setSwitchWork] = useState(true);

  console.log(Projects[0].title,"try this")
  return (
    <div  className={`flex-col py-64 w-full items-center justify-center `}>
      <div id="work" className='pt-5'>
        <h1 className=' text-white text-center mx-auto text-4xl border-t-4  border-mainPurple  w-fit font-opensans font-bold py-2'>
          WORK
        </h1>
      </div>
      
       
      <div className='relative w-full flex flex-column items-center justify-center z-10 drop-shadow-lg '>
        
          {switchWork ? (
            <div className="bg-grey-900 w-[full] pt-14 pb-60">
            <div className="w-[100%] max-w-7xl mx-auto relative flex flex-wrap gap-20 pb-16">
          
              {Projects.map((project, index) => {
                return (
                  < ProjectCard title={project.title} img={project.img} url={project.url} repo={project.repo} para={project.para}>
                  </ProjectCard>
                  )
                }
              )}
            </div>
            </div>
          ) : <div className="bg-grey-900 w-[full] pt-14 pb-60 ">
          <div className=" w-full max-w-7xl mx-auto relative flex flex-wrap gap-20 pb-16">
        
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
          <div className="w-[95%] max-w-[125rem] text-5xl flex justify-between absolute top-[39%] translate-x[-50%] z-10 cursor-pointer">
          <AiOutlineLeft
            className="arrow text-white text-[30px]"
            onClick={() => setSwitchWork(!switchWork)}
          />
          <AiOutlineRight
            className="arrow text-white text-[30px]"
            onClick={() => setSwitchWork(!switchWork)}
          />
        </div>
          
        
      </div>
      
    </div>
  )
}

export default ProjectSection;