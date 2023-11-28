// import React from 'react'
// // import NavBar from '../components/NavBar'
// import mainImg from "../../src/assets/images/image1.png";
// import mainImg2 from "../../src/assets/images/image2.png";
// import mainImg3 from "../../src/assets/images/image3.png";
// import { Box,  Grid,  Typography } from '@mui/material';
// import SearchAppBar from '../components/Nav2';
// // import DayCard from '../components/cards/DayCard';
// import CustomCard from '../components/cards/DayCard2';
// import c1 from "../../src/assets/images/c1.png"
// import c2 from "../../src/assets/images/c2.png"

// function Page1() {

//   const bulletPointsArray = ["Bullet Point 1", "Bullet Point 2", "Bullet Point 3"];

//   return (
//     <>
//     {/* <Grid container sx={{position:"relative"}} >
//       <Grid item md={12} sx={{position:"fixed", top:"0", left:"0"}}> */}
//     {/* <NavBar/> */}
//     {/* <SearchAppBar/>
//     <Grid item>
//       <Box>
//     <img src={mainImg} style={{width:"100%", objectFit:"cover", height:"%"}}/>
//     </Box>
//     </Grid>
//     </Grid>
//     </Grid> */}

//     <section style={{height:"100vh"}}>
//     <SearchAppBar/>
//     <img src={mainImg}  style={{ width:"100%", objectFit:"cover", objectPosition:"bottom", height:"90%"}}/>
//     <Box sx={{position:"absolute", zIndex:2, top:100, left:100}} >
//       <Typography sx={{fontSize:"50px", color:"#32455f"}}>Discover Your </Typography>
//       <Typography sx={{fontSize:"50px", color:"#32455f", marginTop:"-20px"}}>Next Hike</Typography>
//     </Box>
//     </section>
//     <section style={{ backgroundColor:"#fff", paddingBottom:"20px"}}>
//       <Box sx={{marginTop:"20px", marginLeft:"50px"}}>    <Typography sx={{fontSize:"50px", color:"#32455f"}}>How to Recover  </Typography>
//     <Typography sx={{fontSize:"50px", color:"#32455f", marginTop:"-20px"}}>From A Hike  </Typography>
//     </Box>

//       <Grid container columnSpacing={5} px={5}>
//         <Grid item md={6} sm={12}>
//         <Box sx={{marginTop:"10px", }}>
//         <CustomCard title={'title'} bulletPoints={bulletPointsArray} imageSrc={c1} sectionTwoText={''}/>
//         </Box>
//         </Grid>
//         <Grid item md={6} sm={12}>
//         <Box sx={{marginTop:"10px" }}>
//         <CustomCard title={'title'} bulletPoints={bulletPointsArray} imageSrc={c2} sectionTwoText={''}/>
//         </Box>
//         </Grid>
//       </Grid>
 
//     </section>
//     <section style={{ position:"relative"}}>
     
//     <img src={mainImg2}  style={{ width:"100%", objectFit:"cover", objectPosition:"bottom", height:"90%"}}/>
//     <Box sx={{position:"absolute", zIndex:2, top:90, left:90  }} >
//       <Typography sx={{fontSize:"100px", color:"#ffffff"}}>BIG BEND NATIONAL </Typography>
//       <Typography sx={{fontSize:"100px", color:"#ffffff", marginTop:"-60px"}}>PARK HIKING GUIDE </Typography>
//       <Typography sx={{fontSize:"50px", color:"#ffffff", marginTop:"-30px"}} >THIS HIKE IS THE NEXT </Typography>
//       <Typography sx={{fontSize:"50px", color:"#ffffff", marginTop:"-25px"}}>BEST OPTION</Typography>
//     </Box>
   
   
//     {/* <Box sx={{position:"absolute", zIndex:4, bottom:20 }} >
//       <Typography sx={{fontSize:"50px", color:"#32455f"}}>Discover Your </Typography>
//       <Typography sx={{fontSize:"50px", color:"#32455f", marginTop:"-20px"}}>Next Hike</Typography>
//     </Box> */}
//     </section>
//     <section style={{height:"100vh", position:"relative"}}> 
//     <img src={mainImg3}  style={{ width:"100%", objectFit:"cover", objectPosition:"bottom", height:"90%"}}/>
//     <Box sx={{position:"absolute", zIndex:2, top:20, left:90  }} >
//       <Typography sx={{fontSize:"50px", color:"#32455f"}}>ROCK</Typography>
//       <Typography sx={{fontSize:"50px", color:"#32455f", marginTop:"-30px"}}>CLIMBING </Typography>
//       <Typography sx={{fontSize:"35px", color:"#32455f",}} >1. Classes and events </Typography>
//       <Typography sx={{fontSize:"20px", color:"#32455f", marginBottom:"10px"}}>some text some text some text</Typography>
//     <hr/>
//     <Typography sx={{fontSize:"20px", color:"#32455f", marginTop:"10px"}}>10 Modules</Typography>
//     <Typography sx={{fontSize:"20px", color:"#32455f", marginTop:"0"}}>Devided in to 7 weeks</Typography>
//     </Box>
//     </section>
//     </>
//   )
// }

// export default Page1;



//////////////////////////////// responsived///////////////////////////////////////////




import React from 'react';
import { Box,  Typography } from '@mui/material';
import SearchAppBar from '../components/Nav2';
// import CustomCard from '../components/cards/DayCard2';
// import c1 from '../../src/assets/images/c1.png';
// import c2 from '../../src/assets/images/c2.png';
import mainImg from '../../src/assets/images/image1.png';
// import mainImg2 from '../../src/assets/images/image2.png';
// import mainImg4 from '../../src/assets/images/image4.png';
// import mainImg5 from '../../src/assets/images/image5.png';
// import Rimage1 from "../../src/assets/images/Rimage1.png";
// import ClassCard from '../components/cards/ClassesCard';
// import mainImg6 from '../../src/assets/images/image6.png';
// import mainImg3 from '../../src/assets/images/image3.png';
// import PlaceCard from '../components/cards/PlaceCards';

// import { Button } from 'react-bootstrap';

import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
// import ClassCard from '../components/cards/ClassesCard';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';

function Page1() {
  // const bulletPointsArray = ['Bullet Point 1', 'Bullet Point 2', 'Bullet Point 3'];

  return (
    <>
      <section style={{ height: '100vh' }}>
        <SearchAppBar />
        <img
          src={mainImg}
          style={{ width: '100%', objectFit: 'cover', objectPosition: 'bottom', height: '90%' }}
        />
        <Box sx={{ position: 'absolute', zIndex: 2, top: '15%', left: '10%', textAlign: 'left' }}>
          <Typography sx={{ fontSize: { xs: '30px', md: '50px' }, color: '#32455f' }}>
            Discover Your
          </Typography>
          <Typography sx={{ fontSize: { xs: '30px', md: '50px' }, color: '#32455f', marginTop: '-20px' }}>
            Next Hike
          </Typography>
        </Box>
      </section>

      <section style={{ backgroundColor: '#fff', paddingBottom: '20px' }}>
        <Page2/>

      </section>

      <section style={{ position: 'relative' }}>
        <Page3/>
      </section>

      <section style={{ height: '100vh', position: 'relative' }}>
        <Page4/>
      
      </section>
      <section style={{  position: 'relative' }}>
        <Page7/>
      {/* <Typography sx={{ fontSize: '50px', color: '#32455f', marginLeft:"50px" }}>PLACES TO VISIT</Typography>
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
        </Grid> */}
       
      </section>
      <section style={{  position: 'relative' }}> 
      <Page5/>
     
      </section>
      <section style={{  position: 'relative' }}>
        <Page8/>
      {/* <Grid container columnSpacing={2} px={5}>
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
        </Box> */}
          </section>
          <section style={{  position: 'relative' }}>
            <Page9/>
          {/* <img
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
       
        </Box> */}

          </section>
    </>
  );
}

export default Page1;