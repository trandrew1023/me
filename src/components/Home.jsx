import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { React, useEffect } from 'react';
import imageChicken from '../static/images/chick.png';

export default function Home() {
  useEffect(() => {
    document.title = 'Home - Trandrew';
    window.scrollTo(0, 0);
    AOS.init();
  }, []);

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        height: 'auto',
        minHeight: window.innerWidth >= 540 ? '90.0vh' : '100vh',
      }}
    >
      <Grid
        data-aos="fade-up"
        container
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: '90vh',
        }}
      >
        <Grid item xs={12}>
          <Avatar src={imageChicken} alt="" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Hello World!</Typography>
        </Grid>
        <Grid item xs={6}>
          <PrecisionManufacturingIcon fontSize="large" />
        </Grid>
        <Grid item xs={6}>
          <Typography>Work in progress. Please explore!</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
