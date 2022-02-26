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
import imageRaspberryPi from '../static/images/raspberry-pi.png';
import imageSecret from '../static/images/20181021_064059.jpg';
import imageSecurityCam from '../static/images/Screenshot_20191211-135650_SecurityCam.jpg';
import imageSelfie from '../static/images/selfie.png';
import imageShoppingList from '../static/images/shopping-list.png';

export default function Projects() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const projects = [
    {
      key: 0,
      img: image281,
      alt: '281++',
      name: '281++',
      description: `Web application allowing users to design, 
        simulate, and debug digital logic schematics.`,
      url: 'https://github.com/trandrew1023/281-plus-plus',
    },
    {
      key: 1,
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
      key: 2,
      img: imageClock,
      alt: 'Clock',
      name: 'ClockOut Extension',
      description: `Google Chrome extension that helps you 
      calculate when you need to clock out for work.`,
      url: 'https://github.com/trandrew1023/clock-out-extension',
    },
    {
      key: 3,
      img: imageDrinkersChoice,
      alt: 'Drinker\'s Choice',
      name: 'Drinker\'s Choice',
      description: `Reddit-like Android application 
      for drinks created as a class project.`,
      url: 'https://github.com/trandrew1023/drinkers-choice',
    },
    {
      key: 4,
      img: imageCctv,
      alt: 'CCTV',
      name: 'Economic Home Security System',
      description: `Web application focused on 
      being an affordable home security solution.`,
      url: 'https://github.com/trandrew1023/economic-home-security-system',
    },
    {
      key: 5,
      img: imageSelfie,
      alt: 'Selfie',
      name: 'Security Cam',
      description: 'Android application that turns your phone into a security cam.',
      url: 'https://github.com/trandrew1023/security-cam',
    },
    {
      key: 6,
      img: imageRaspberryPi,
      alt: 'RaspberryPi',
      name: 'S.E.C.R.E.T',
      description: `Hackathon project that encrypts and embeds 
      messages across multiple devices.`,
      url: 'https://github.com/trandrew1023/secret-hack-isu-project',
    },
    {
      key: 7,
      img: imageShoppingList,
      alt: 'Shopping List',
      name: 'Shopping List',
      description: `Simple Android application for 
      creating shopping lists.`,
      url: 'https://github.com/trandrew1023/shopping-list',
    },
  ];

  const projectPageDescriptions = new Map();
  projectPageDescriptions.set(0, {
    title: '281++',
    img: image281gif,
    alt: '281++',
    descriptionBody: [
      {
        key: 0,
        description: `A class project created with Michael Lauderback and Justin Worley. 
    Also voted as top project by the class!`,
      },
      {
        key: 1,
        description: `CprE 281 is Iowa State's Digital Logic class. 
    We use Quartus Prime to design for our FPGA and it could be challenging
    at times to debug and use. We wanted to make a Notepad++ equivalent to 
    prototype, save, and simulate digital logic schematics.`,
      },
    ],
    techStack: [
      'Firebase',
      'Bootstrap',
      'JQuery',
      'p5.js',
    ],
    url: 'https://github.com/trandrew1023/281-plus-plus',
  });
  projectPageDescriptions.set(1, {
    title: 'aCOUPlefarms',
    img: imageChicken,
    alt: 'Chicken',
    descriptionBody: [
      {
        key: 0,
        description: `aCOUPlefarms is a web application inspired by my parents who own a poultry farm.
        From the number of birds, how much food/water is left, or just notes to look back onto, my
        parents currently use pen, paper, or even memory to track vital information.`,
      },
      {
        key: 1,
        description: `The app allows users to join or create new organizations (like a Farm) and different
        places (such as a coop) to save and track customizable statistics.`,
      },
      {
        key: 2,
        description: `This app is still under development but is deployed using Heroku's free dynos
        so you can check it out if you like (may take a bit to load at first).`,
      },
    ],
    techStack: [
      'React',
      'React Router',
      'Axios',
      'Spring Boot',
      'Postgres/h2',
    ],
    url: 'https://github.com/trandrew1023/acouplefarms-app',
    site: 'https://acouplefarms.herokuapp.com/',
  });
  projectPageDescriptions.set(2, {
    title: 'ClockOut Extension',
    img: imageClockout,
    alt: 'Clockout',
    descriptionBody: [
      {
        key: 0,
        description: `A personal project that I created during my internship to help me quickly 
        figure out when I clock out for the day.`,
      },
      {
        key: 1,
        description: `While interning at Cerner, another intern 
        created a website that would calculate when you should clock out.
        I stole the idea and made a Chrome extension for myself with additions to suit my needs.`,
      },
    ],
    techStack: [
      'JavaScript',
      'HTML/CSS',
      'Bootstrap',
      'Moment.js',
    ],
    url: 'https://github.com/trandrew1023/clock-out-extension',
  });
  projectPageDescriptions.set(3, {
    title: 'Drinker\'s Choice',
    img: imageDrinkersChoiceApp,
    alt: 'Drinker\'s Choice App',
    descriptionBody: [
      {
        key: 0,
        description: 'A class project created with Camden Thomas and Ethan Young.',
      },
      {
        key: 1,
        description: `As my first big project from scratch, I was nervous and excited to start. 
        The app is very similar to Reddit. A user can post a drink with a description, up or downvote,
        comment, and share. Since drinks may also included alcohol, we built in a ride request 
        as well where one can request a ride with location, messaging, and redirection to a 
        payment app is included.`,
      },
    ],
    techStack: [
      'Android',
      'Java WebSocket',
      'Spring',
      'SQL',
    ],
    url: 'https://github.com/trandrew1023/drinkers-choice',
  });
  projectPageDescriptions.set(4, {
    title: 'Economic Home Security System',
    img: imageEHSS,
    alt: 'Economic Home Security System Post',
    descriptionBody: [
      {
        key: 0,
        description: `Senior Design Final Project created with Uma Abu, Lucas Jedlicka, 
        Kamini Saldanha, Merin Mundt, and Sohum Sawant.`,
      },
      {
        key: 1,
        description: `Today's consumerism leads many good and bad things. 
        A few observations our team has made: many smartphones sit unused, crimes and 
        burglaries are still common, and the market for security systems is growing. 
        Our goal was to create a self suficient security system that recycles old hardware.`,
      },
    ],
    techStack: [
      'Django',
      'Djoser/SimpleJWT',
      'Docker',
      'Medooze Media Server',
      'SQL',
      'NGINX',
      'React',
      'JavaScript',
      'TensorFlow',
    ],
    url: 'https://github.com/trandrew1023/economic-home-security-system',
    site: 'http://sdmay20-42.sd.ece.iastate.edu/docs/Poster-sdmay20-42.pdf',
  });
  projectPageDescriptions.set(5, {
    title: 'Security Cam',
    img: imageSecurityCam,
    alt: 'Security Cam',
    descriptionBody: [
      {
        key: 0,
        description: 'A class project created with Isaac Zahau and Lucas Jedlicka.',
      },
      {
        key: 1,
        description: `Inspired by Economic Home Security System, 
        this was created as an Android prototype for a proof of concept. 
        The senior design project is a web application which
        has browser limitations, affecting older devices. 
        A native Android application would have reasonable performance and 
        more compatibility. This was created before the final project so it 
        does not use the same services for streaming
        and user authentication.`,
      },
    ],
    techStack: [
      'Android',
      'Firebase',
      'Libstreaming',
    ],
    url: 'https://github.com/trandrew1023/security-cam',
  });
  projectPageDescriptions.set(6, {
    title: 'S.E.C.R.E.T',
    img: imageSecret,
    alt: 'S.E.C.R.E.T',
    descriptionBody: [
      {
        key: 0,
        description: `A hackathon project created with Jack Potter, Camden Thomas, and 
        Ethan Young. Awarded First Place Hardware and Most Ethical Hack!`,
      },
      {
        key: 1,
        description: `The S.E.C.R.E.T (Steganography/Encryption for Circumventing REalized Tyranny)&nbsp;device
        consists primarily of a Raspberry Pi and Arduino Uno. The Raspberry Pi contains our python scripts 
        that encrypt and embed the secrets into images, while the Arduino provides a hardware interface 
        for the to interact with. The S.E.C.R.E.T is capable of completely headless operation, reqr or 
        keyboard, only three onboard buttons and single status LED. The Arduino also interfaces with the microphone we use for atmospheric noise collection
        in the process of random number generation. Half of our team focused on assembling the hardware 
        and developing the interface to connect the low-luiring no monitoevel code to the physical 
        devices, while the other half focused on implementing
        the encryption and steganography systems.`,
      },
    ],
    techStack: [
      'Python',
      'Raspberry Pi/Arduino Uno',
    ],
    url: 'https://github.com/trandrew1023/secret-hack-isu-project',
    site: 'https://devpost.com/software/secret-prv9bq',
  });
  projectPageDescriptions.set(7, {
    title: 'Shopping List',
    img: imageShoppingList,
    alt: 'Shopping List',
    descriptionBody: [
      {
        key: 0,
        description: 'A class mini-project to create a shopping list app.',
      },
      {
        key: 1,
        description: `This is a simple shopping list Android app created to learn how to build an 
        Android app from the ground up. There was also a focus on using the MVC pattern and specific
        tools and libraries.`,
      },
    ],
    techStack: [
      'Android',
    ],
    url: 'https://github.com/trandrew1023/security-cam',
  });

  const openProject = (projectKey) => {
    sessionStorage.setItem('y-position', window.scrollY);
    navigate('/project', { state: projectPageDescriptions.get(projectKey) });
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
              />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
