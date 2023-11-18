import React from 'react';
import { linkedInLogo, behanceLogo, githubLogo } from '../../assets';
import styles, { layout } from "../../style"
const Footer = () => {
  return (
    <div className={`${layout.section} w-full`}>
      <div className="flex space-x-6 items-end w-[60%] mx-auto justify-between">	
        <a href="#">
					<img src={linkedInLogo} alt="LinkedIn Logo" className='w-[30px]'/>								
				</a>
							
				<a href="#">
					<img src={behanceLogo} alt="behance Logo" className='w-[38px]'/>								
			</a>

      <a href="#">
				<img src={githubLogo} alt="behance Logo" className='w-[32px]'/>								
			</a> 
			</div>
    </div>
  )
}

export default Footer