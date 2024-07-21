import React from 'react'
import { FaFacebook,FaInstagram,FaGithub,FaTwitter} from "react-icons/fa";
const Bootstrap = () => {
  return (
    <div className='d-flex justify-content-around align-items-center'>
        <div className='content p-5'>
            <h1>Hii,Hii,I'am John Deo</h1>
            <p>A Freelancer Web Developer from London I convert Custom <br /> Web designer to bootstrap templates.</p>
            <p>I make YouTube videos and write Blog</p>
            <button className='btn btn-primary'>I'M AVAILABLE</button>
            <p className='d-flex mt-4 w-25 justify-content-between'>
            <FaFacebook /><FaInstagram /><FaGithub /><FaTwitter />
            </p>
        </div>
        <div className='image text-white justify-content-between'>
            <img src="wp5302998.webp" alt="" className='h-100 w-100 object-fit-cover'/>
        </div>
    </div>
  )
}

export default Bootstrap