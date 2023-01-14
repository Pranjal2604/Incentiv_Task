import React from 'react'
import './style.css'
import hero from '../../Images/Group-393.png'
import { Button } from '@mui/material'

const HeroSection = () => {
  return (
    <div className='hero-section-container'>
      <div className='Text-container'>
    <h1 className='heading-text'> Streamline How You Manage
          <span className='text-blue'>ESOPs</span>
   </h1>
   <p className='Para-text'> Incentiv offers an easy way for employers to issue 
         ESOPs/grants, and allow employees to easily accept,
         track, exercise, and sell their granted shares.
   </p>
   <Button variant='contained' className='hero-btn'>Request Demo</Button>
   </div>
   <div> 
    <img  src = {hero} alt="hero" className='hero-img'/>

   </div>
   </div>
  )
}

export default HeroSection