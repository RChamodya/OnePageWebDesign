import React from "react";
import { Card, CardContent, CardMedia, Typography, Divider, Grid, Box } from "@mui/material";

interface CustomCardProps {
  title: string;
  bulletPoints: string[];
  imageSrc: string;
  sectionTwoText: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, bulletPoints, imageSrc, sectionTwoText }) => {
  return (
    <Card>
      <Grid container>
        {/* Section One */}
        <Grid item xs={12} md={8}>
          <CardContent  sx={{justifyContent:"space-between",display:"flex", width:"100%", color:"#32455f"}} >
            <Box>
            <Typography variant="h5" component="div" gutterBottom>
              {title}
            </Typography>
            <ul>
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            </Box>
            <Box >
                <CardMedia component="img" height="100" image={imageSrc} alt="Image" sx={{  }} />
            </Box>
          </CardContent>
        </Grid>

        {/* Divider */}
        <Grid item xs={12}>
          <Divider />
        </Grid>

        {/* Section Two */}
        {/* <Grid item xs={12} md={4}>
          <CardMedia component="img" height="150" image={imageSrc} alt="Image" sx={{ borderRadius: "0%" }} />
        </Grid> */}
        <Typography variant="h5" component="div" gutterBottom sx={{color:"#32455f", margin:"16px"}}>
             awawwffedf awawwffedf
            </Typography>

        <Grid item xs={12}>
          <CardContent>
            <Typography variant="body1" component="div">
              {sectionTwoText}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CustomCard;