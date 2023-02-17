import React from 'react'
import {BsTwitter,BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://twitter.com/aleemxl10' alt='aleemxl10' target="__blank"> <BsTwitter/></a>
           
        </div>
        <div>
          <a href="https://www.linkedin.com/in/aleem-shah-aa9557266/" target="_blank"> <FaLinkedinIn/></a>
           
        </div>
        <div>
          <a href="https://www.instagram.com/aleemxl10/" target="_blank">  <BsInstagram/></a>
          
        </div>
    </div>
  )
}

export default SocialMedia
