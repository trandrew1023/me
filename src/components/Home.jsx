import { Avatar, Box, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { React, useEffect, useState } from 'react';
import imageChicken from '../static/images/chick.png';

export default function Home() {
  const about = 'Hello! My name is Andrew.';
  const [aboutText, setAboutText] = useState('|');
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    document.title = 'Home - Trandrew';
    window.scrollTo(0, 0);
    AOS.init();

    let i = 0;
    const interval = setInterval(() => {
      setAboutText(`${about.substring(0, i)}|`);
      i += 1;
      if (i > about.length) {
        clearInterval(interval);
        setAboutText(about.substring(0, i));
        setLoading(false);
      }
    }, 60);
  }, [about]);

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
        <Grid
          item
          xs={12}
          sx={{
            textAlign: 'center',
            width: window.innerWidth >= 540 ? '75vw' : '90vw',
          }}
        >
          <Typography variant="h1" fontSize={40}>
            {aboutText}
          </Typography>
        </Grid>
        {!loading && (
          <Grid
            data-aos="fade-up"
            item
            xs={12}
            sx={{
              textAlign: 'center',
              width: window.innerWidth >= 540 ? '75vw' : '90vw',
              position: 'absolute',
              top: window.innerWidth >= 608 ? '50%' : '55%',
              transform: 'translateX(-50%)',
            }}
          >
            <Typography>
              I am currently a Software Engineer at Oracle (through Cerner
              acquisition).
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
