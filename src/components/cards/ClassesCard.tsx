import React from 'react';
import { Card, CardContent,  Typography, Box } from '@mui/material';
import { Button } from 'react-bootstrap';

interface ResponsiveCardProps {
  title: string;
  description: string;
  imageUrl: string;
  additionalText: string;
}

const ClassCard: React.FC<ResponsiveCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: 'auto' }}>
      {/* <CardMedia
        component="img"
        alt="Card Image"
        height="100px"
        width="100px"
        image={imageUrl}
        sx={{ borderRadius: '500px', objectFit: 'cover', objectPosition: 'center bottom' , }}
      /> */}
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <img src={imageUrl} alt="" style={{margin:"auto", borderRadius:"50%", width:"150px",marginTop:"20px"}}  />
      </Box>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ textAlign: 'center', mt: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 1 }}>
          {description}
        </Typography>
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Button style={{backgroundColor:"#5f6551" , color:"#fff", borderRadius:"50px", paddingLeft:"10px",  paddingRight:"10px"}} >See more</Button>
          </Box>
        
      </CardContent>
      
    </Card>
  );
};

export default ClassCard;
