// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import App from '../App';
// // import AboutSection from '../components/AboutSection/AboutSection';
// // import Projects from '../components/projectSection/ProjectSection';
// import React, { Suspense } from 'react';
// import DelayFallback from './DelayFallback';

// const App = React.lazy(() => import('../App'));
// const AboutSection = React.lazy(() => import('../components/AboutSection/AboutSection'));
// const Projects = React.lazy(() => import('../components/projectSection/ProjectSection'));

// const RoutesIndex = () => {
//   return (
//     <Router>
//       <Suspense fallback={<DelayFallback/>}>
//         <Routes>
//           <Route path="/" element={<App />} />
//           <Route path="/home" element={<App />} />
//           <Route path="/about" element={<AboutSection />} />
//           <Route path="/projects" element={<Projects />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// };

// export default RoutesIndex;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import React, { Suspense, useEffect, useState } from 'react';
import HashLoader from "react-spinners/HashLoader";
import style from './routes.module.css';

const App = React.lazy(() => import('../App'));
const AboutSection = React.lazy(() => import('../components/AboutSection/AboutSection'));
const Projects = React.lazy(() => import('../components/projectSection/ProjectSection'));

// 👇 Handles route change + show loader briefly
const RoutesWithLoader = () => {
  const location = useLocation();
  const [navLoading, setNavLoading] = useState(false);

  useEffect(() => {
    setNavLoading(true);
    const timer = setTimeout(() => {
      setNavLoading(false);
    }, 1000); // Show spinner for 1 second on navigation

    return () => clearTimeout(timer);
  }, [location.pathname]); // trigger on every path change

  if (navLoading) {
    return (
      <div className={style.routeLoader}>
        <HashLoader size={60} color="#00acee" />
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className={style.routeLoader}>
        <HashLoader size={60} color="#00acee" />
      </div>
    }>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Suspense>
  );
};

const RoutesIndex = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000); // Initial page load delay

    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return (
      <div className={style.initialLoader}>
        <HashLoader size={60} color="#00acee" />
      </div>
    );
  }

  return (
    <Router>
      <RoutesWithLoader />
    </Router>
  );
};

export default RoutesIndex;




