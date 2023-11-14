import React from 'react';

const ProjectCard = ({ img, title, para, url, repo }) => {
  return (
    <div className='relative z-1 w-2xl min-h-[33rem] min-w-[25rem] mx-auto shadow-custom bg-gray-900 rounded-lg cursor-pointer transition ease-in duration-400 overflow-hidden'>
      <div className='bg-gray-900'>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={img} alt="preview thumbnail of a project" className='w-[100%] object-contain ease-in duration-300 shadow-xl opacity-100 hover:scale-110'/>
        </a>
      </div>
      <div className='absolute w-full min-h-[20rem] p-6 leading-relaxed bottom-0 left-0 bg-gray-800 cursor-grab text-center'>
        <h3>{title}</h3>
        <p className='text-white font-bitter font-semiboldte'>{para}
        {repo && (
          <a className='text-dimBurgundy italic decoration-0 font-bold' href={repo} target="blank" rel="noreferrer">Link to repository</a>
        )}</p>
      </div>
    </div>
  )
}

export default ProjectCard;