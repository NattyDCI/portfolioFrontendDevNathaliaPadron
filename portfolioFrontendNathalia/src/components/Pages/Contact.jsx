import React from 'react';
import styles, { layout } from "../../style"
import { messageIcon, envelopeIcon, personIcon,behanceLogo, linkedInLogo, githubLogo } from '../../assets';

const Contact = () => {
  return (
  <div  className={`  flex-col py-64 w-full items-center justify-center `}>
    <div  className={`${layout.section} ${styles.flexCenter} flex-col py-64 w-full items-center justify-center`}>
      <div className={`flex flex-col w-[70%] `}>
        <h1 id="contact" className='text-white text-center text-4xl font-opensans font-bold pb-5 pt-20'>
          CONTACT
        </h1> 
        <p className='font-opensans text-white text-2lg'>If you are <span className='font-opensans font-bold italic text-2lg'>passionate</span> about a project or have a bussines of your own, don't hesitate to use this form. </p>
        <br /> 
        <p className='font-opensans text-white text-2lg'>Write me a request or question! I'm interested in working on<span className='font-opensans font-bold italic text-2lg'> large and creative projects.</span></p>
        <br />
        <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-4">
					<div class="space-y-12">
						<div>
							<label class="font-bitter text-white block text-lg font-bold mb-1">
                <div className='flex items-baseline'>
                  <img className="w-[25px] mr-2" src={personIcon} alt="" />
                  <p >Name</p>
                </div>
              </label>
							<input class="w-full border border-input-border rounded-xl bg-input px-4 py-4 bg-dimBurgundy"/>
						</div>
            <div>
							<label class="font-bitter text-white block text-lg font-bold mb-1">
                <div className='flex items-end'>
                  <img className="w-[34px] mr-2 items-start" src={envelopeIcon} alt="" />
                  <p>E-mail</p>
                </div>
              </label>
							<input type="email" class="w-full border border-input-border bg-input px-4 py-4 rounded-xl bg-dimBurgundy"/>
						</div>
						<div>
							<label class="font-bitter text-white block text-lg font-bold mb-1">
                  <div className='flex items-end'>
                    <img className="w-[30px] mr-2" src={messageIcon} alt="" />
                    <p>Message</p>
                  </div>
              </label>
							<textarea type="email" class="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none bg-dimBurgundy rounded-xl"></textarea>
						</div>
						<button class="w-[140px] h-[60px] border-2 bg-dimBurgundy rounded-md mt-6 p-[2px] cursor-pointer text-white font-bold">
              <p className="font-bitter font-medium text-[18px] leading-[23.4px]">
                Send it!
              </p>
            </button>
						
					</div>

					<div class="mt-12">
						
						<p class="font-opensans font-semibold text-lg text-white mr-2">
              Telefonummer: <span className='font-opensans text-lg font-medium'>(+49)174 3515 044</span> 
            </p>
            <div className='flex items-end'>
              <p className='font-opensans font-semibold text-lg text-white mr-2'>Email:</p>
              <a href="mailto:email@mydomain.com" class="font-opensans font-regular text-lg text-white underline mt-3 block">
                <span className='text-dimBurgundy'>nbavutti@gmail.com</span>
              </a>
            </div>

						
						<div className="flex mt-24 space-x-6 items-end">
							
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
      </div>
    <div className={`${layout.section} ${styles.flexCenter} `}>

      
        
     
      
        
  
    </div>
  </div>
</div>
</div>
);
}

export default Contact