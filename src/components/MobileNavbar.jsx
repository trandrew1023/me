import { React } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import BookIcon from '@mui/icons-material/Book';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

export default function MobileNavbar() {
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
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
    '#/portfolio',
    '#/blog',
  ];

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation
        showLabels
        value={paths.indexOf(window.location.hash) === -1 ? '/' : window.location.hash}
        sx={{
          width: '100%',
          position: 'fixed',
          bottom: 0,
        }}
      >
        <BottomNavigationAction
          value={'/' || '#/'}
          label="Home"
          onClick={() => navigate('/')}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          value="#/resume"
          label="Resume"
          onClick={() => navigate('/resume')}
          icon={<ContactPageIcon />}
        />
        <BottomNavigationAction
          value="#/projects"
          label="Projects"
          onClick={() => navigate('/projects')}
          icon={<AppsIcon />}
        />
        <BottomNavigationAction
          value="#/portfolio"
          label="Portfolio"
          onClick={() => navigate('/portfolio')}
          icon={<FolderSharedIcon />}
        />
        <BottomNavigationAction
          value="#/blog"
          label="Blog"
          onClick={() => navigate('/blog')}
          icon={<BookIcon />}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
}
