import { React, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from './ProjectCard';
import image281 from '../static/images/main-page.png';
import imageCctv from '../static/images/cctv.png';
import imageChicken from '../static/images/hen.png';
import imageClock from '../static/images/clock.png';
import imageDrinkersChoice from '../static/images/drinkers-choice.png';
import imageRaspberryPi from '../static/images/raspberry-pi.png';
import imageSelfie from '../static/images/selfie.png';
import imageShoppingList from '../static/images/shopping-list.png';

export default function Projects() {
  const projects = [
    {
      img: image281,
      alt: '281++',
      name: '281++',
      description: `Web application allowing users to design, 
        simulate, and debug digital logic schematics.`,
      url: 'https://github.com/trandrew1023/281-plus-plus',
    },
    {
      img: imageChicken,
      alt: 'Chicken',
      name: 'aCOUPlefarms',
      description: `Web application to manage poutry farms.
      The app is currently deployed with free Heroku dynos so it may
      take a bit to load.`,
      url: 'https://github.com/trandrew1023/acouplefarms-app',
      site: 'https://acouplefarms.herokuapp.com/',
    },
    {
      img: imageClock,
      alt: 'Clock',
      name: 'ClockOut Extension',
      description: `Google Chrome extension that helps you 
      calculate when you need to clock out for work.`,
      url: 'https://github.com/trandrew1023/clock-out-extension',
    },
    {
      img: imageDrinkersChoice,
      alt: 'Drinker\'s Choice',
      name: 'Drinker\'s Choice',
      description: `Reddit-like Android application 
      for drinks created as a class project.`,
      url: 'https://github.com/trandrew1023/drinkers-choice',
    },
    {
      img: imageCctv,
      alt: 'CCTV',
      name: 'Economic Home Security System',
      description: `Web application focused on 
      being an affordable home security solution.`,
      url: 'https://github.com/trandrew1023/economic-home-security-system',
    },
    {
      img: imageSelfie,
      alt: 'Selfie',
      name: 'Security Cam',
      description: 'Android application that turns your phone into a security cam.',
      url: 'https://github.com/trandrew1023/security-cam',
    },
    {
      img: imageRaspberryPi,
      alt: 'RaspberryPi',
      name: 'S.E.C.R.E.T',
      description: `Hackathon project that encrypts and embeds 
      messages across multiple devices.`,
      url: 'https://github.com/trandrew1023/secret-hack-isu-project',
    },
    {
      img: imageShoppingList,
      alt: 'Shopping List',
      name: 'Shopping List',
      description: `Simple Android application for 
      creating shopping lists.`,
      url: 'https://github.com/trandrew1023/shopping-list',
    },
  ];

  useEffect(() => {
    document.title = 'Projects - Trandrew';
    window.scrollTo(0, 0);
    AOS.init();
  });

  return (
    <Box
      sx={{
        mt: 5,
        mb: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '72vh',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Projects
      </Typography>
      <Grid
        container
        alignItems="stretch"
        justifyContent="center"
        sx={{ mt: 3 }}
      >
        {
          projects.map((project) => (
            <Grid
              data-aos="fade-in"
              key={project.name}
              container
              item
              justifyContent="center"
              xs={12}
              sm={6}
              md={4}
              xl={3}
              sx={{ mb: 3 }}
            >
              <ProjectCard projectDetails={project} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
