import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomCard from '../components/cards/DayCard2';
import c1 from '../../src/assets/images/c1.png';
import c2 from '../../src/assets/images/c2.png';

function Page2() {
    const bulletPointsArray = ['Bullet Point 1', 'Bullet Point 2', 'Bullet Point 3'];
  return (
   <>
    <Box sx={{ marginTop: '20px', marginLeft: { xs: '10px', md: '50px' } }}>
          <Typography sx={{ fontSize: { xs: '30px', md: '50px' }, color: '#32455f' }}>
            How to Recover
          </Typography>
          <Typography sx={{ fontSize: { xs: '30px', md: '50px' }, color: '#32455f', marginTop: '-20px' }}>
            From A Hike
          </Typography>
        </Box>

        <Grid container columnSpacing={{ xs: 1, md: 5 }} px={{ xs: 1, md: 5 }}>
          <Grid item md={6} sm={12}>
            <Box sx={{ marginTop: '10px' }}>
              <CustomCard title={'title'} bulletPoints={bulletPointsArray} imageSrc={c1} sectionTwoText={''} />
            </Box>
          </Grid>
          <Grid item md={6} sm={12}>
            <Box sx={{ marginTop: '10px' }}>
              <CustomCard title={'title'} bulletPoints={bulletPointsArray} imageSrc={c2} sectionTwoText={''} />
            </Box>
          </Grid>
        </Grid>
   
   </>
  )
}

export default Page2
