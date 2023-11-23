import React from 'react';

const ProjectCard = ({ img, title, para, url, repo, codepen }) => {
  return (
    <div className='relative z-1 w-2xl min-h-[34rem] min-w-[28rem] mx-auto shadow-custom bg-gray-900 rounded-lg cursor-pointer transition ease-in duration-400 overflow-hidden'>
      <div className='bg-gray-500'>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={img} alt="preview thumbnail of a project" className='w-[100%] object-contain ease-in duration-300 shadow-xl opacity-100 hover:scale-110'/>
        </a>
      </div>
      <div className='absolute w-full min-h-[20rem] p-6 leading-relaxed bottom-0 left-0 bg-gray-800 cursor-grab text-center'>
        <h3 className='font-opensans font-semibold text-2xl text-white mb-5'>{title}</h3>
        <p className='font-opensans text-white font-regular text-justify text-lg'>{para}
        {repo ? (
          <a className='text-mainPurple italic decoration-0 font-bold' href={repo} target="blank" rel="noreferrer">Link to Repository</a>
        ) : <a className='text-mainPurple italic decoration-0 font-bold' href={codepen} target="blank" rel="noreferrer">Link to codepen</a> }</p>
      </div>
    </div>
  )
}

export default ProjectCard;