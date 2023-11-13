import React from 'react';
import { Neuromorphic_music_player } from "../assets/index"

const ProjectCard = ({ img, title, children, url, repo }) => {
  return (
    <div className='relative z-10 w-2xl min-h-[40rem] min-w-[40rem] mx-auto shadow-custom bg-gray-700 rounded-lg cursor-pointer transition ease-in duration-400 overflow-hidden'>
      <div className='bg-gray-900'>
        <img src={Neuromorphic_music_player} alt="Neuromorphic Music Player" className='w-full object-contain ease-in duration-300 shadow-xl opacity-80 hover:scale-110'/>
      </div>
      <div className='absolute w-full min-h-[20rem] p-6 leading-relaxed bottom-0 left-0 bg-gray-800 cursor-grab text-center'>
        <h3>{title}</h3>
        <p>{children}
        {repo && (
          <a className='text-white decoration-0 font-bold' href={repo} target="blank" ref="nonreferer">Link to repository</a>
        )}</p>
      </div>
    </div>
  )
}

export default ProjectCard;