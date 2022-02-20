import { React } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Blog from './components/Blog';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import MobileNavbar from './components/MobileNavbar';

function App() {
  return (
    <HashRouter>
      <>
        {window.innerWidth >= 540 && <Header />}
        <Routes>
          <Route path="/me" element={<Home />} />
          <Route path="/me/resume" element={<Resume />} />
          <Route path="/me/projects" element={<Projects />} />
          <Route path="/me/portfolio" element={<Portfolio />} />
          <Route path="/me/blog" element={<Blog />} />
          <Route path="*" element={<Home />} />
        </Routes>
        {window.innerWidth < 540 ? <MobileNavbar /> : <Footer />}
      </>
    </HashRouter>
  );
}

export default App;
