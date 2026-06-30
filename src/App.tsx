import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageLoader from './components/PageLoader';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Other = lazy(() => import('./pages/Other'));

function App() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
