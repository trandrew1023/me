import { React, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortfolioCard from './PortfolioCard';
import imageCamera from '../static/images/camera.png';
import imageDance from '../static/images/fun.png';
import imageYoutTube from '../static/images/youtube.png';

export default function Portfolio() {
  AOS.init();
  const portfolioCards = [
    {
      img: imageCamera,
      alt: 'Camera',
      name: 'Photography',
      description: 'Hopefully you don\'t just an image by its cover.',
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
  });

  return (
    <Box
      sx={{
        mt: 5,
        mb: 5,
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Portfolio
      </Typography>
      <Grid
        container
        alignItems="stretch"
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
              sm={6}
              md={4}
              sx={{ mb: 3 }}
            >
              <PortfolioCard portfolioCardDetails={portfolioCard} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}