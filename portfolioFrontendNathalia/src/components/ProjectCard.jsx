import React from 'react';
import styles from '../style';
import { ExternalLink } from '../assets';

const ProjectCard = ({ img, title, para, url, repo, codepen }) => {
  return (
    <div className='relative z-1 w-2xl w-[25rem] min-h-[22rem] min-w-[22rem] mx-auto  bg-slate-200 dark:bg-primary dark:border-2 dark:border-offWhite border-3 border-indigo-200 rounded-lg cursor-pointer transition ease-in duration-400 overflow-hidden mb-8 m-5 ring-3 ring-slate-400'>
      <div className='w-full min-h-[55%] overflow-hidden'>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={img} alt="preview thumbnail of a project" className='w-[100%] object-contain ease-in duration-300 opacity-100 hover:scale-110'/>
        </a>
        </div>
      
      <div className='flex flex-col justify-center items-center absolute dark:bg-primary bg-slate-200 w-full min-h-[45%] h-[9rem] p-7 py-4 leading-relaxed bottom-0 left-0 dark:bg-primary  bg-slate-200  cursor-grab text-center z-4'>
        <p className='font-opensans font-semibold text-md dark:text-white text-offDark mb-3'>{title}</p>
        <p className='font-opensans dark:text-white text-offDark font-regular text-justify text-sm'>{para}
        {repo ? (
          <a className='text-mainPurple italic decoration-0 font-bold mb-3' href={repo} target="blank" rel="noreferrer">
            Link to Repository <span className='inline-block align-text-bottom'><ExternalLink addedStyles={`dark:stroke-offWhite stroke-offDark`}/></span>
          </a> 
        ) : <a className='text-mainPurple italic decoration-0 font-bold mb-3' href={codepen} target="blank" rel="noreferrer">
        Link to codepen  <span className='inline-block align-text-bottom'><ExternalLink addedStyles={`dark:stroke-offWhite stroke-offDark`}/></span>
        </a> }</p>
      
      </div>
    </div>
  )
}

export default ProjectCard;