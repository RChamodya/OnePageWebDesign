import { Box, Typography } from '@mui/material'
import React from 'react'
import mainImg2 from '../../src/assets/images/image2.png';

function Page3() {
  return (
    <>
    
    <img
          src={mainImg2}
          style={{ width: '100%', objectFit: 'cover', objectPosition: 'bottom', height: '90%' }}
        />
        <Box sx={{ position: 'absolute', zIndex: 2, top: '10%', left: '10%', textAlign: 'left' }}>
          <Typography sx={{ fontSize: { xs: '30px', md: '100px' }, color: '#ffffff' }}>
            BIG BEND NATIONAL
          </Typography>
          <Typography sx={{ fontSize: { xs: '30px', md: '100px' }, color: '#ffffff', marginTop: '-60px' }}>
            PARK HIKING GUIDE
          </Typography>
          <Typography sx={{ fontSize: { xs: '20px', md: '50px' }, color: '#ffffff', marginTop: '-30px' }}>
            THIS HIKE IS THE NEXT
          </Typography>
          <Typography sx={{ fontSize: { xs: '20px', md: '50px' }, color: '#ffffff', marginTop: '-25px' }}>
            BEST OPTION
          </Typography>
        </Box>
    </>
  )
}

export default Page3
