import { React, useEffect } from 'react';
import {
  Box,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ProjectPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${state.title} - Trandrew`;
    window.scrollTo(0, 0);
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
        minHeight: window.innerWidth >= 540 ? '90.0vh' : '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      {state && (
        <>
          <img
            src={state.img}
            alt={state.alt}
            style={{ marginTop: window.innerWidth >= 540 ? '60px' : '30px' }}
            width={window.innerWidth >= 540 ? '30%' : window.innerWidth / 1.1}
          />
          <Grid
            container
            width={window.innerWidth >= 540 ? '60%' : '90%'}
            sx={{
              mt: 3,
              mb: 7,
            }}
          >
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ textAlign: 'center' }}>{state.title}</Typography>
            </Grid>
            {state.descriptionBody.map((descriptionPart) => (
              <Grid key={descriptionPart.key} item xs={12} sx={{ mb: 2 }}>
                <Typography variant="body">{descriptionPart.description}</Typography>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Typography
                variant="body"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Tech Stack:
              </Typography>
              <ul>
                {state.techStack.map((tech) => (
                  <li key={tech}>
                    <Typography variant="body">{tech}</Typography>
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid item xs={12}>
              <IconButton href={state.url}>
                <GitHubIcon fontSize="large" />
              </IconButton>
              {state.site && (
                <IconButton href={state.site}>
                  <PublicIcon fontSize="large" />
                </IconButton>
              )}
            </Grid>
            <Grid item xs={12}>
              <IconButton onClick={() => { navigate('/projects'); sessionStorage.setItem('backToProject', true); }}>
                <ArrowBackIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
}
