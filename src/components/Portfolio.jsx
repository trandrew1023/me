import { React, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortfolioCard from './PortfolioCard';
import imageCamera from '../static/images/camera.png';
import imageDance from '../static/images/fun.png';
import imageYoutTube from '../static/images/youtube.png';

export default function Portfolio() {
  const portfolioCards = [
    {
      img: imageCamera,
      alt: 'Camera',
      name: 'Photography',
      description: 'Hopefully you don\'t judge an image by its cover.',
      url: 'https://andrewtran32.pixieset.com/andrewsgallery/',
    },
    {
      img: imageDance,
      alt: 'Dance',
      name: 'Dance',
      description: 'I started dancing in high school and dance for fun once in a while.',
      url: 'https://www.instagram.com/w3rdnart/',
    },
    {
      img: imageYoutTube,
      alt: 'YouTube',
      name: 'YouTube',
      description: `Mainly where I post my video projects. From old
      gaming videos, vlogs, to embarrassing videos, you can find them here.`,
      url: 'https://www.youtube.com/trandrew1023',
    },
  ];

  useEffect(() => {
    document.title = 'Portfolio - Trandrew';
    window.scrollTo(0, 0);
    AOS.init();
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
        minHeight: '90.0vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        zIndex: 0,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mt: window.innerWidth >= 540 ? 10 : 5,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Portfolio
      </Typography>
      <Grid
        container
        alignItems="stretch"
        width="80%"
        sx={{ mt: 3 }}
      >
        {
          portfolioCards.map((portfolioCard) => (
            <Grid
              data-aos="fade-in"
              key={portfolioCard.name}
              container
              item
              justifyContent="center"
              xs={12}
              md={6}
              lg={4}
              sx={{ mb: 8 }}
            >
              <PortfolioCard portfolioCardDetails={portfolioCard} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
