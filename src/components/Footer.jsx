import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Grid, IconButton, Tooltip } from '@mui/material';
import { React } from 'react';

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        display: 'flex',
        minHeight: '10vh',
      }}
    >
      <Grid
        container
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid item>
          <Tooltip title="LinkedIn" placement="top">
            <IconButton
              href="https://www.linkedin.com/in/trandrew1023/"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="GitHub" placement="top">
            <IconButton
              href="https://github.com/trandrew1023"
              aria-label="GitHub Profile"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="YouTube" placement="top">
            <IconButton
              href="https://www.youtube.com/trandrew1023"
              aria-label="YouTube Channel"
            >
              <YouTubeIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Instagram" placement="top">
            <IconButton
              href="https://www.instagram.com/w3rdnart/"
              aria-label="Instagram Profile"
            >
              <InstagramIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
}
