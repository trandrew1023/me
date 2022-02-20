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
    '#/me/resume',
    '#/me/projects',
    '#/me/portfolio',
    '#/me/blog',
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
          value={'/' || '#/' || '#/me'}
          label="Home"
          onClick={() => navigate('/me')}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          value="#/me/resume"
          label="Resume"
          onClick={() => navigate('/me/resume')}
          icon={<ContactPageIcon />}
        />
        <BottomNavigationAction
          value="#/me/projects"
          label="Projects"
          onClick={() => navigate('/me/projects')}
          icon={<AppsIcon />}
        />
        <BottomNavigationAction
          value="#/me/portfolio"
          label="Portfolio"
          onClick={() => navigate('/me/portfolio')}
          icon={<FolderSharedIcon />}
        />
        <BottomNavigationAction
          value="#/me/blog"
          label="Blog"
          onClick={() => navigate('/me/blog')}
          icon={<BookIcon />}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
}
