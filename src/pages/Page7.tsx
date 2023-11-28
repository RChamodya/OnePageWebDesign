import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import PlaceCard from '../components/cards/PlaceCards'
import Rimage1 from "../../src/assets/images/Rimage1.png";


function Page7() {
  return (
    <>
    <Typography sx={{ fontSize: '50px', color: '#32455f', marginLeft:"50px" }}>PLACES TO VISIT</Typography>
      <Typography sx={{ fontSize: '50px', color: '#32455f', margin:"50px", marginTop:"-25px" }}>IN AUTUMN</Typography>
        <Grid container columnSpacing={2} px={5}>
          <Grid item md={4} sm={4} xs={12} >
          <PlaceCard title={'title'} description={'desc'} imageUrl={Rimage1} additionalText={'ffff'}/>
          </Grid>
          <Grid item md={4} sm={4} xs={12} >
          <PlaceCard title={'title'} description={'desc'} imageUrl={Rimage1} additionalText={'ffff'}/>
          </Grid>
          <Grid item md={4} sm={4} xs={12} >
          <PlaceCard title={'title'} description={'desc'} imageUrl={Rimage1} additionalText={'ffff'}/>
          </Grid>
        </Grid>
        <Grid md={12} lg={12} sm={12} xs={12} sx={{justifyContent:"center", display:"flex", alignItems:"center" , p:5}}>
          <Button>See more</Button>
        </Grid>
    </>
  )
}

export default Page7
