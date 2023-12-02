import React from 'react';
import styles from '../style';
import { ExternalLink } from '../assets';

const ProjectCard = ({ img, title, para, url, repo, codepen }) => {
  return (
   
    
    <div className='mx-4 relative z-2 w-2xl sm:max-md:w-[19rem] min-w-[18rem] max-w-[22rem] min-h-[21rem] rounded-lg cursor-pointer transition ease-in duration-400 overflow-hidden mb-8 m-5 ring ring-8 dark:bg-slate-700 bg-slate-200 dark:ring-slate-700 ring-slate-200 ring-offset-4'>

      <div className='w-full min-h-[60%] overflow-hidden'>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={img} alt="preview thumbnail of a project" className='w-[100%] object-contain ease-in duration-300 opacity-100 hover:scale-110'/>
        </a>
        </div>
      
      <div className='flex flex-col justify-center items-center absolute dark:bg-slate-700 w-full min-h-[45%] h-[9rem] p-7 py-4 leading-relaxed bottom-5 left-0  bg-slate-200 cursor-grab text-center z-4'>
        <p className='font-opensans font-semibold text-md dark:text-white text-offDark mb-3'>{title}</p>
        <p className='font-opensans dark:text-white text-offDark font-regular text-justify text-sm'>{para}
        {repo ? (
          <a className='font-bold text-mainPurple italic decoration-0 hover:underline hover:decoration-2 mb-3' href={repo} target="blank" rel="noreferrer">
            Link to Repository <span className='inline-block align-text-bottom'><ExternalLink addedStyles={`dark:stroke-offWhite stroke-mainPurple`}/></span>
          </a> 
        ) : <a className='text-mainPurple italic font-bold decoration-0  hover:underline hover:decoration-2 mb-3' href={codepen} target="blank" rel="noreferrer">
        Link to codepen  <span className='inline-block align-text-bottom'><ExternalLink addedStyles={`dark:stroke-offWhite stroke-mainPurple`}/></span>
        </a> }</p>
      
      </div>
    </div>
   
  )
}

export default ProjectCard;