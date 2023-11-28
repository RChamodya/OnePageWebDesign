import {  Box, Typography } from '@mui/material'
import React from 'react'
import mainImg6 from '../../src/assets/images/image6.png';

function Page9() {
  return (
    <>
            <img
          src={mainImg6}
          style={{ width: '100%', objectFit: 'cover', objectPosition: 'bottom', height: '90%' }}
        />
        <Box sx={{ position: 'absolute', zIndex: 2, top: '1%', left: '10%', textAlign: 'left' , marginTop:"20px" }}>
        <Typography sx={{ fontSize: '60px', color: '#fff' }}>HOW TO RECOVER FROM</Typography>
          <Typography sx={{ fontSize: '60px', color: '#fff', marginTop: '-35px' }}>A HIKE</Typography>
          
        </Box>
        <Box sx={{ position: 'absolute', zIndex: 2, top: '20%', left: '10%', textAlign: 'left' , marginTop:"20px" }}>
          <Typography sx={{ fontSize: '60px', color: '#fff', marginTop: '-5px' }}>15.09.20</Typography>
        </Box>
        <Box sx={{ position: 'absolute', zIndex: 2, top: '5%', right: '20%', textAlign: 'left' , marginTop:"20px" ,display:"flex" }}>
          <Typography sx={{ fontSize: '100px', color: '#fff', marginTop: '-5px' }}>50%</Typography>
          <Typography sx={{ fontSize: '40px', color: '#fff', marginTop: '57px' ,marginLeft:'30px'}}>OFF</Typography>
        </Box>
        <Box sx={{ position: 'absolute', zIndex: 2, top: '20%', right: '11.5%', textAlign: 'left' , marginTop:"20px" }}>
          <Typography sx={{ fontSize: '35px', color: '#fff', marginTop: '-5px' }}>Best on this summer season</Typography>
          <Typography sx={{ fontSize: '35px', color: '#fff', marginTop: '-5px' }}>21.09.20</Typography>
        </Box>
        <Box sx={{ position: 'absolute', zIndex: 2, top: '55%', left: '15%', textAlign: 'center' , marginTop:"20px" }}>
          <Typography sx={{ fontSize: '35px', color: '#fff', marginTop: '-5px' }}>"Mountains stand as timeless sentinels,</Typography>
          <Typography sx={{ fontSize: '35px', color: '#fff', marginTop: '-5px' }}>whispering tales of resilience to those who dare to climb. </Typography>
          <Typography sx={{ fontSize: '35px', color: '#fff', marginTop: '-5px' }}>In their peaks, we find not just altitude, but the elevation of the human spirit."</Typography>

        </Box>
    
    </>
  )
}

export default Page9
