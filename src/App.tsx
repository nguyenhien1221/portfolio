import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PageLoader from './components/PageLoader';

const Home = lazy(() => import('./pages/home/Home'));
const Other = lazy(() => import('./pages/other/Other'));
const Projects = lazy(() => import('./pages/projects/Projects'));
const Skills = lazy(() => import('./pages/skills/Skills'));
const Contact = lazy(() => import('./pages/contact/Contact'));

const App = () => {
  return (
    <div className="min-h-svh bg-ink">
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/other" element={<Other />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
