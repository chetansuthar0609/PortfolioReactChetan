// // DelayFallback.jsx
// import React, { useEffect, useState } from 'react';
// import style from './routes.module.css';

// const DelayFallback = () => {
//   const [showLoader, setShowLoader] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowLoader(false);
//     }, 5000); // 2 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   return showLoader ? (
//     <div className={style.brand}>CS</div>
//   ) : null; // Return null to let the component load
// };

// export default DelayFallback;

// utils/delayImport.js
export const delayImport = (factory, delay = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      factory().then(resolve);
    }, delay);
  });
};
