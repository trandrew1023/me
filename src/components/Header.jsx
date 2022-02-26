import { React } from 'react';
import { AppBar, Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

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
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1,
        alignItems: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
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
          label="Home"
          onClick={() => navigate('/')}
        />
        <Tab
          value="#/resume"
          label="Resume"
          onClick={() => navigate('/resume')}
        />
        <Tab
          value={'#/projects' || '#/project'}
          label="Projects"
          onClick={() => navigate('/projects')}
        />
        <Tab
          value="#/portfolio"
          label="Portfolio"
          onClick={() => navigate('/portfolio')}
        />
        <Tab
          value="#/blog"
          label="Blog"
          onClick={() => navigate('/blog')}
        />
      </Tabs>
    </AppBar>
  );
}
