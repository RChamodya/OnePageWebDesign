import { Box, Typography } from '@mui/material'
import React from 'react'
import mainImg4 from '../../src/assets/images/image4.png';

function Page5() {
  return (
   <>
   <img
          src={mainImg4}
          style={{ width: '100%', objectFit: 'cover', objectPosition: 'bottom', height: '90%' }}
        />
         <Box sx={{ position: 'absolute', zIndex: 2, top: '10%', right: '10%', textAlign: 'right' }}>
          <Typography sx={{ fontSize: { xs: '50px', md: '90px' }, color: '#ffffff' }}>
            HIKING &
          </Typography>
          <Typography sx={{ fontSize: { xs: '50px', md: '90px' }, color: '#ffffff', marginTop: '-30px' }}>
            BACKPACKING
          </Typography>
          <Typography sx={{ fontSize: { xs: '25px', md: '50px' }, color: '#ffffff', marginTop: '-15px' }}>
            THIS HIKE IS THE NEXT
          </Typography>
          <Typography sx={{ fontSize: { xs: '25px', md: '50px' }, color: '#ffffff', marginTop: '-10px' }}>
            BEST OPTION
          </Typography>
        </Box>
   </>
  )
}

export default Page5
