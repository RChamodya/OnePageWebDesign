import React from 'react';
import { Card, CardContent,  Typography, Box, Divider } from '@mui/material';

interface ResponsiveCardProps {
  title: string;
  description: string;
  imageUrl: string;
  additionalText: string;
}

const PlaceCard: React.FC<ResponsiveCardProps> = ({ title, description, imageUrl, additionalText }) => {
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
      </CardContent>
      <Divider />
      <Box sx={{ padding: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {additionalText}
        </Typography>
      </Box>
    </Card>
  );
};

export default PlaceCard;
