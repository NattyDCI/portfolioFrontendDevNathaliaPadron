import React from 'react';
import { ProjectCard }  from '../index';
import { Projects } from "../../constants"

const ProjectSection = () => {
  console.log(Projects[0].title,"try this")
  return (
    <div className='relative w-screen flex flex-column items-center justify-center z-10 drop-shadow-lg'>
        <div className="bg-grey-900 w-full pt-60 pb-80">
          <div className="w-[90%] max-w-7xl mx-auto relative flex flex-wrap gap-6 pb-16">
            {Projects.map((project, index) => {
              return (
                < ProjectCard title={project.title} img={project.img} url={project.url} repo={project.repo} para={project.para}>
                </ProjectCard>
                )
              }

            )}
          </div>
        </div>
    </div>
  )
}

export default ProjectSection;