import { grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { React, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import DarkModeToggleButton from './components/DarkModeToggleButton';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MobileNavbar from './components/MobileNavbar';
import Portfolio from './components/Portfolio';
import ProjectPage from './components/ProjectPage';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('dark-mode-pref') === null
      ? 'light'
      : localStorage.getItem('dark-mode-pref'),
  );
  const theme = createTheme({
    palette: {
      mode: darkMode,
      primary: {
        main: darkMode === 'dark' ? grey[100] : grey[900],
      },
      secondary: {
        main: darkMode === 'dark' ? grey[100] : grey[900],
      },
    },
  });

  const toggleDarkMode = () => {
    const newMode = darkMode === 'dark' ? 'light' : 'dark';
    setDarkMode(newMode);
    localStorage.setItem('dark-mode-pref', newMode);
  };

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        {window.innerWidth >= 540 ? (
          <Header
            darkModeToggle={
              <DarkModeToggleButton
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
        ) : (
          <DarkModeToggleButton
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:name" element={<ProjectPage />} />
          <Route path="/portfolio" element={<Portfolio reset />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Home />} />
        </Routes>
        {window.innerWidth < 540 ? <MobileNavbar /> : <Footer />}
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
