import { React, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Header from './components/Header';
import Blog from './components/Blog';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import MobileNavbar from './components/MobileNavbar';
import ProjectPage from './components/ProjectPage';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('dark-mode-pref') === null ? 'light' : localStorage.getItem('dark-mode-pref'),
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

  const toggleDarkMode = (mode) => {
    setDarkMode(mode);
    localStorage.setItem('dark-mode-pref', mode);
  };

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        {window.innerWidth >= 540 && <Header />}
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} setDarkMode={toggleDarkMode} />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:name" element={<ProjectPage />} />
          <Route path="/portfolio" element={<Portfolio reset />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Home darkMode={darkMode} setDarkMode={toggleDarkMode} />} />
        </Routes>
        {window.innerWidth < 540 ? <MobileNavbar /> : <Footer />}
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
