import React from 'react'
import { FaTruck } from "react-icons/fa";
import { FaCircleNotch } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
const About = () => {
  return (
    <div className="about">
   <div className="container">
    <div className="row">
        <div className="col-lg-4 col-md-12"><FaTruck className='icon'/><h4  className='mb-3 mt-3'>FREE SHIPPING</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p></div>
        <div className="col-lg-4 col-md-12 "><FaCircleNotch className='icon' /><h4  className='mb-3 mt-3'>FREE RETURNS</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p></div>
        <div className="col-lg-4 col-md-12 "><FaQuestion className='icon'  /><h4 className='mb-3 mt-3'>CUSTOMER SUPPORT</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p></div>
      
    </div>
   </div>
   <hr />
   </div>
  
  )
}

export default About