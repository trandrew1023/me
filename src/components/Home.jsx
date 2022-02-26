import { React, useEffect } from 'react';
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Typography,
}
  from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imageChicken from '../static/images/chick.png';

export default function Home({ darkMode, setDarkMode }) {
  useEffect(() => {
    document.title = 'Home - Trandrew';
    window.scrollTo(0, 0);
    AOS.init();
  });

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        height: '100vh',
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
      <IconButton
        onClick={() => setDarkMode(darkMode === 'dark' ? 'light' : 'dark')}
        sx={{
          position: 'fixed',
          top: '0',
          right: '0',
        }}
      >
        {darkMode === 'light' ? <Brightness4Icon /> : <Brightness4OutlinedIcon />}
      </IconButton>
    </Box>
  );
}

Home.propTypes = {
  darkMode: PropTypes.string.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
