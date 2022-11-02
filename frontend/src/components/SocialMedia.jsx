import React from 'react';
import { BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';


const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a href='https://twitter.com/vaibhavsethia11' target='_blank' rel='noopener noreferrer'><BsTwitter /></a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/vaibhav-sethia-650635125/' target='_blank' rel='noopener noreferrer'><BsLinkedin /></a>
    </div>
    <div>
    <a href='https://www.instagram.com/vaibhavsethia07/' target='_blank' rel='noopener noreferrer'><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
