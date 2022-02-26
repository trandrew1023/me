import { React } from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
}
  from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <IconButton href="https://www.linkedin.com/in/trandrew1023/">
            <LinkedInIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://github.com/trandrew1023">
            <GitHubIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://www.youtube.com/channel/UCnytMLS4Fis7XvvZZznjNig">
            <YouTubeIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton href="https://www.instagram.com/w3rdnart/">
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >
        <Button onClick={() => navigate('/')}>Home</Button>
        <Button onClick={() => navigate('/resume')}>Resume</Button>
        <Button onClick={() => navigate('/projects')}>Projects</Button>
        <Button onClick={() => navigate('/portfolio')}>Portfolio</Button>
        <Button onClick={() => navigate('/blog')}>Blog</Button>
      </Grid>
    </Box>
  );
}
