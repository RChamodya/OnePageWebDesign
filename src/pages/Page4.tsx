import { Box, Typography } from '@mui/material'
import React from 'react'
import mainImg3 from '../../src/assets/images/image3.png';

function Page4() {
  return (
   <>
   <img
          src={mainImg3}
          style={{ width: '100%', objectFit: 'cover', objectPosition: 'bottom', height: '90%' }}
        />
        <Box sx={{ position: 'absolute', zIndex: 2, top: '10%', left: '10%', textAlign: 'left' }}>
          <Typography sx={{ fontSize: '50px', color: '#32455f' }}>ROCK</Typography>
          <Typography sx={{ fontSize: '50px', color: '#32455f', marginTop: '-30px' }}>CLIMBING</Typography>
          <Typography sx={{ fontSize: '35px', color: '#32455f' }}>
            1. Classes and events
          </Typography>
          <Typography sx={{ fontSize: '20px', color: '#32455f', marginBottom: '10px' }}>
            some text some text some text
          </Typography>
          <hr style={{ borderTop: '2px solid #32455f', width: '70%' }} />
          <Typography sx={{ fontSize: '20px', color: '#32455f', marginTop: '10px' }}>
            10 Modules
          </Typography>
          <Typography sx={{ fontSize: '20px', color: '#32455f', marginTop: '0' }}>
            Divided in to 7 weeks
          </Typography>
        </Box>
   </>
  )
}

export default Page4
