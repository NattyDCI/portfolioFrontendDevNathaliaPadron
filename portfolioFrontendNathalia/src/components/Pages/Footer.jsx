import React from 'react';
import { Linkedin, Behance, Github } from '../../assets';
import styles, { layout } from "../../style"

const Footer = () => {
  return (
    <div className={`${layout.section} w-full`}>
    	<div className="flex space-x-6 items-end w-[60%] mx-auto justify-between">	
        	<a href="#">
				<Linkedin addedStyles="dark:fill-offWhite fill-offDark"/>								
			</a>
							
			<a href="#">
				<Behance addedStyles="dark:fill-offWhite fill-offDark" />								
			</a>

      		<a href="#">
				<Github addedStyles="dark:fill-offWhite fill-offDark"/>
			</a> 
		</div>
    </div>
  )
}

export default Footer