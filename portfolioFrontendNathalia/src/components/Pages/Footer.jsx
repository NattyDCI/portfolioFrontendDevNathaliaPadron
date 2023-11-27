import React from 'react';
import { Linkedin, Behance, Github } from '../../assets';
import styles, { layout } from "../../style"

const Footer = () => {
  return (
    <div className={`${layout.section} w-full`}>
    	<div className="flex space-x-6 items-end w-[60%] mx-auto justify-between">	
        	<a href="https://www.linkedin.com/in/nathalia-industrial/" target="_blank">
				<Linkedin addedStyles="dark:fill-offWhite fill-offDark"/>								
			</a>
							
			<a href="https://www.behance.net/nathe22" target="_blank">
				<Behance addedStyles="dark:fill-offWhite fill-offDark" />								
			</a>

      		<a href="https://github.com/NattyDCI" target="_blank">
				<Github addedStyles="dark:fill-offWhite fill-offDark"/>
			</a> 
		</div>
    </div>
  )
}

export default Footer