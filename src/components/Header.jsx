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
    '#/resume',
    '#/projects',
    '#/project',
    '#/portfolio',
    '#/blog',
  ];

  const getValue = () => {
    const path = window.location.hash;
    if (paths.indexOf(path) === -1) return '/';
    if (path === '#/project') return '#/projects';
    return path;
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{ alignItems: 'center' }}
      >
        <Tabs
          value={getValue()}
          indicatorColor="primary"
          TabIndicatorProps={{
            sx: {
              background: 'black',
            },
          }}
        >
          <Tab
            value={'/' || '#/'}
            label={<span style={{ color: 'black' }}>Home</span>}
            onClick={() => navigate('/')}
          />
          <Tab
            value="#/resume"
            label={<span style={{ color: 'black' }}>Resume</span>}
            onClick={() => navigate('/resume')}
          />
          <Tab
            value={'#/projects' || '#/project'}
            label={<span style={{ color: 'black' }}>Projects</span>}
            onClick={() => navigate('/projects')}
          />
          <Tab
            value="#/portfolio"
            label={<span style={{ color: 'black' }}>Portfolio</span>}
            onClick={() => navigate('/portfolio')}
          />
          <Tab
            value="#/blog"
            label={<span style={{ color: 'black' }}>Blog</span>}
            onClick={() => navigate('/blog')}
          />
        </Tabs>
      </AppBar>
    </ThemeProvider>
  );
}
