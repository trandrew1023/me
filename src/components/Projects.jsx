import { React, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from './ProjectCard';
import image281 from '../static/images/main-page.png';
import image281gif from '../static/images/dflipflop.gif';
import imageCctv from '../static/images/cctv.png';
import imageChicken from '../static/images/hen.png';
import imageClock from '../static/images/clock.png';
import imageClockout from '../static/images/clockout.JPG';
import imageDrinkersChoice from '../static/images/drinkers-choice.png';
import imageDrinkersChoiceApp from '../static/images/drinkers-choice.jpg';
import imageEHSS from '../static/images/Poster-sdmay20-42.jpg';
import imagePen from '../static/images/pen.png';
import imageRaspberryPi from '../static/images/raspberry-pi.png';
import imageSecret from '../static/images/20181021_064059.jpg';
import imageSecurityCam from '../static/images/Screenshot_20191211-135650_SecurityCam.jpg';
import imageSelfie from '../static/images/selfie.png';
import imageShoppingList from '../static/images/shopping-list.png';
import projects from '../static/data/projects.json';

export default function Projects() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const images = {
    '../static/images/dflipflop.gif': image281gif,
    '../static/images/main-page.png': image281,
    '../static/images/cctv.png': imageCctv,
    '../static/images/hen.png': imageChicken,
    '../static/images/clock.png': imageClock,
    '../static/images/clockout.JPG': imageClockout,
    '../static/images/drinkers-choice.png': imageDrinkersChoice,
    './static/images/drinkers-choice.jpg': imageDrinkersChoiceApp,
    '../static/images/Poster-sdmay20-42.jpg': imageEHSS,
    '../static/images/raspberry-pi.png': imageRaspberryPi,
    '../static/images/20181021_064059.jpg': imageSecret,
    '../static/images/Screenshot_20191211-135650_SecurityCam.jpg': imageSecurityCam,
    '../static/images/selfie.png': imageSelfie,
    '../static/images/shopping-list.png': imageShoppingList,
    '../static/images/pen.png': imagePen,
    '../static/data/projects.json': projects,
  };

  const openProject = (projectName) => {
    sessionStorage.setItem('y-position', window.scrollY);
    navigate(`/project/${projectName}`);
  };

  useEffect(() => {
    document.title = 'Projects - Trandrew';
    const yPosition = sessionStorage.getItem('y-position');
    const backToProject = sessionStorage.getItem('backToProject');
    if (yPosition) {
      sessionStorage.removeItem('y-position');
      sessionStorage.removeItem('backToProject');
      if (backToProject || !state?.reset) {
        window.scrollTo(0, yPosition);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
    AOS.init();
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '72vh',
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
              sx={{ mb: 8 }}
            >
              <ProjectCard
                projectDetails={project}
                openProject={openProject}
                projectImage={images[project.img]}
              />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
