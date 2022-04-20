import { React, useEffect, useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ViewCozyIcon from '@mui/icons-material/ViewCozy';
import ViewCozyOutlinedIcon from '@mui/icons-material/ViewCozyOutlined';
import { useNavigate } from 'react-router-dom';

export default function MobileNavbar() {
  const [selectedIcon, setSelectedIcon] = useState('home');
  const [value, setValue] = useState('/');
  const navigate = useNavigate();

  const paths = [
    '#/resume',
    '#/projects',
    '#/project',
    '#/portfolio',
    '#/blog',
  ];

  useEffect(() => {
    const path = window.location.hash;
    setValue(path);
    if (path.includes('#/project')) {
      setSelectedIcon('projects');
      setValue('#/projects');
    } else if (paths.indexOf(path) === -1) {
      setSelectedIcon('home');
      setValue('/');
    } else if (path === paths[0]) setSelectedIcon('resume');
    else if (path === paths[1] || path === paths[2]) setSelectedIcon('projects');
    else if (path === paths[3]) setSelectedIcon('portfolio');
    else if (path === paths[4]) setSelectedIcon('blog');
    else setSelectedIcon('home');
  });

  return (
    <BottomNavigation
      showLabels
      value={value}
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        bgcolor: 'background.default',
      }}
    >
      <BottomNavigationAction
        value={'/' || '#/'}
        label="Home"
        onClick={() => { navigate('/'); setSelectedIcon('home'); }}
        icon={selectedIcon === 'home' ? <HomeIcon /> : <HomeOutlinedIcon />}
      />
      <BottomNavigationAction
        value="#/resume"
        label="Resume"
        onClick={() => { navigate('/resume'); setSelectedIcon('resume'); }}
        icon={selectedIcon === 'resume' ? <ContactPageIcon /> : <ContactPageOutlinedIcon />}
      />
      <BottomNavigationAction
        value="#/projects"
        label="Projects"
        onClick={() => { navigate('/projects'); setSelectedIcon('projects'); }}
        icon={selectedIcon === 'projects' ? <ViewCozyIcon /> : <ViewCozyOutlinedIcon />}
      />
      <BottomNavigationAction
        value="#/portfolio"
        label="Portfolio"
        onClick={() => { navigate('/portfolio'); setSelectedIcon('portfolio'); }}
        icon={selectedIcon === 'portfolio' ? <FolderSharedIcon /> : <FolderSharedOutlinedIcon />}
      />
      <BottomNavigationAction
        value="#/blog"
        label="Blog"
        onClick={() => { navigate('/blog'); setSelectedIcon('blog'); }}
        icon={selectedIcon === 'blog' ? <BookIcon /> : <BookOutlinedIcon />}
      />
    </BottomNavigation>
  );
}
