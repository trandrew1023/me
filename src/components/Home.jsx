import { React, useEffect } from 'react';
import {
  Avatar,
  Box,
  Grid,
  Typography,
}
  from '@mui/material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imageChicken from '../static/images/chick.png';

export default function Home() {
  useEffect(() => {
    document.title = 'Home - Trandrew';
    window.scrollTo(0, 0);
    AOS.init();
  });

  return (
    <Box data-aos="fade-down">
      <Grid
        container
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: '80vh',
        }}
      >
        <Grid item xs={12}>
          <Avatar src={imageChicken} />
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
