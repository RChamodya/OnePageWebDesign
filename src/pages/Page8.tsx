import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ClassCard from '../components/cards/ClassesCard'
import mainImg5 from '../../src/assets/images/image5.png';
import Rimage1 from "../../src/assets/images/Rimage1.png";

function Page8() {
  return (
  <>
  <Grid container columnSpacing={2} px={5}>
          <Grid item md={4} sm={4} xs={12} >
          <ClassCard title={'title'} description={'desc'} imageUrl={Rimage1} additionalText={'ffff'}/>
          </Grid>
          <Grid item md={4} sm={4} xs={12} >
          <ClassCard title={'title'} description={'desc'} imageUrl={Rimage1} additionalText={'ffff'}/>
          </Grid>
          <Grid item md={4} sm={4} xs={12} >
          <ClassCard title={'title'} description={'desc'} imageUrl={Rimage1} additionalText={'ffff'}/>
          </Grid>
        </Grid>
        <Grid md={12} lg={12} sm={12} xs={12} sx={{justifyContent:"center", display:"flex", alignItems:"center" , p:5}}>
          <Button>See more</Button>
        </Grid>
        <hr color='#5f6551' style={{marginLeft:"70px", marginRight:"70px"}} />
        <img
          src={mainImg5}
          style={{ width: '100%', objectFit: 'cover', objectPosition: 'bottom', height: '90%' }}
        />
        <Box sx={{ position: 'absolute', zIndex: 2, top: '30%', right: '10%', textAlign: 'left' , marginTop:"100px" }}>
        <Typography sx={{ fontSize: '90px', color: '#5f6551' }}>MOUNTAINEERING</Typography>
          <Typography sx={{ fontSize: '90px', color: '#5f6551', marginTop: '-50px' }}>ICE CLIMBING</Typography>
          <Typography sx={{ fontSize: '50px', color: '#5f6551' }}>
            1. Classes and events
          </Typography>
          <Typography sx={{ fontSize: '20px', color: '#5f6551', marginBottom: '10px' }}>
            some text some text some text
          </Typography>
          <Typography sx={{ fontSize: '20px', color: '#5f6551', marginBottom: '10px' }}>
            some text some text some text
          </Typography>
          <Typography sx={{ fontSize: '20px', color: '#5f6551', marginBottom: '10px' }}>
            some text some text some text
          </Typography>
          <Typography sx={{ fontSize: '20px', color: '#5f6551', marginBottom: '10px' }}>
            some text some text some text
          </Typography>
          <Typography sx={{ fontSize: '20px', color: '#5f6551', marginBottom: '10px' }}>
            some text some text some text
          </Typography>
          <hr style={{ borderTop: '2px solid #5f6551', width: '70%' }} />
          <Typography sx={{ fontSize: '20px', color: '#5f6551', marginTop: '10px' }}>
            10 Modules
          </Typography>
          <Typography sx={{ fontSize: '20px', color: '#5f6551', marginTop: '0' }}>
            Divided in to 7 weeks
          </Typography>
        </Box>
  
  </>
  )
}

export default Page8
