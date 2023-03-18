import { AppBar, Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header({ darkModeToggle }) {
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
    if (path.includes('#/project')) return '#/projects';
    if (paths.indexOf(path) === -1) return '/';
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
            background: 'text.secondary',
          },
        }}
      >
        <Tab value={'/' || '#/'} label="Home" onClick={() => navigate('/')} />
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
      </Tabs>
      {darkModeToggle}
    </AppBar>
  );
}

Header.propTypes = {
  darkModeToggle: PropTypes.element.isRequired,
};
