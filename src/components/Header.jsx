import { React } from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[100],
        contrastText: grey[900],
      },
      secondary: {
        main: grey[900],
        contrastText: grey[100],
      },
    },
  });

  const paths = [
    '/me',
    '/me/resume',
    '/me/projects',
    '/me/portfolio',
    '/me/blog',
  ];

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{ alignItems: 'center' }}
      >
        <Tabs
          value={paths.indexOf(window.location.pathname) === -1 ? '/' : window.location.pathname}
          indicatorColor="primary"
          TabIndicatorProps={{
            sx: {
              background: 'black',
            },
          }}
        >
          <Tab
            value={'/' || '/me'}
            label={<span style={{ color: 'black' }}>Home</span>}
            onClick={() => navigate('/me')}
          />
          <Tab
            value="/me/resume"
            label={<span style={{ color: 'black' }}>Resume</span>}
            onClick={() => navigate('/me/resume')}
          />
          <Tab
            value="/me/projects"
            label={<span style={{ color: 'black' }}>Projects</span>}
            onClick={() => navigate('/me/projects')}
          />
          <Tab
            value="/me/portfolio"
            label={<span style={{ color: 'black' }}>Portfolio</span>}
            onClick={() => navigate('/me/portfolio')}
          />
          <Tab
            value="/me/blog"
            label={<span style={{ color: 'black' }}>Blog</span>}
            onClick={() => navigate('/me/blog')}
          />
        </Tabs>
      </AppBar>
    </ThemeProvider>
  );
}
