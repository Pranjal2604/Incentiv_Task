import React from 'react'
import './style.css'
import Info from './/../../Images/Vector.png'
import { Box, LinearProgress } from '@mui/material'

const Infosection = () => {
  const progress=70;
  return (
    <>
    
<h1 className='info-heading-text'>Why Incentiv?</h1>
    <div className='info-section-container'>


        <div className='info-Text-container'>
        <Box sx={{ width: "25%", transform: [{ rotate: "90deg" }] }}>
              <LinearProgress
                sx={{
                  width: 5,
                  height: 700,
                  color: "magenta",
                  backgroundColor: `#A020F0`,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: `purple`,
                  },
                  "& span.MuiLinearProgress-bar": {
                    transform: `translateY(-${progress}%) !important`, 
                  },
                }}
                variant='determinate'
                value={progress}
              />
            </Box>
            <div>


<h1 className='h1-text'> Manage the complete ESOP lifecycle</h1>
<p1 className='p1-text'> From issuing grants to liquidity events. Handle everything digitally. Manage multiple instruments or unique vesting schedules with ease.
</p1>
            </div>


</div>
<div>

    <img  src = {Info} alt="info" className='info-img'/>
</div>
  
</div>
</>
  )
}

export default Infosection