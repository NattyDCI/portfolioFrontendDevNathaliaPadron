import React from "react";
import { ProjectCard } from "../index";
import { Projects, Projects2 } from "../../constants";
import { MainContext } from "../../Context";
import { useContext } from "react";
import { ArrowtoLeft } from "../../assets";
import styles from "../../style";

const ProjectSection = () => {
  const { workRef, switchWork } = useContext(MainContext);

  return (
    <div
      ref={workRef}
      className={`flex-col xs-max-md:w-full w-[80%] mx-auto content-center pt-12 items-center justify-center z-2`}
    >
     <div className='pt-5'>
        <h1  className='dark:text-white text-offDark border-t-4 mx-auto border-mainPurple w-fit text-center text-4xl font-opensans font-bold'>
              WORK
        </h1> 
      </div>
      <div className={`${styles.boxWidth} flex mx-auto w-full`}>

      <div className="flex flex-wrap bg-grey-900 relative z-10 max-w-7xl w-[90%] gap-2 justify-center items-center mx-auto pb-16">
        {switchWork ? (
          <>
            
              {Projects.map((project, index) => {
                return (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    img={project.img}
                    url={project.url}
                    repo={project.repo}
                    codepen={project.codepen}
                    para={project.para}
                  ></ProjectCard>
                );
              })}
            
          </>
        ) : (
          <>
              {Projects2.map((project, index) => {
                return (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    img={project.img}
                    url={project.url}
                    repo={project.repo}
                    para={project.para}
                  ></ProjectCard>
                );
              })}
            </>
         
        )}
        <div className="w-[95%] max-w-[160rem] text-5xl flex justify-between absolute xs:top-[47%] ss:max-md:top-[47%] top-[47%] translate-x[-50%] z-7 cursor-pointer">
          <ArrowtoLeft addedStyles="arrow dark:fill-white fill-offDark text-offDark" />
          <ArrowtoLeft addedStyles="arrow dark:fill-white fill-offDark ransform rotate-180" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProjectSection;
