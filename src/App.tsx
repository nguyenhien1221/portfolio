import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageLoader from './components/PageLoader';

const Home = lazy(() => import('./pages/home/Home'));

const App = () => {
  return (
    <div className="min-h-svh bg-ink">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Navigate to="/#projects" replace />} />
          <Route path="/skills" element={<Navigate to="/#experience" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="/other" element={<Navigate to="/#about" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
