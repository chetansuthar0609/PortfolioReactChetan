// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import { FaList } from "react-icons/fa";
// import style from './NavDrawer.module.css'
// import { Link } from 'react-router-dom';


// export default function TemporaryDrawer() {
//   const [open, setOpen] = React.useState(false);

//   const [activeLink, setActiveLink] = React.useState(window.location.pathname || '/home');
  
//     React.useEffect(() => {
//       const handlePathChange = () => {
//         setActiveLink(window.location.pathname);
//       };
  
//       window.addEventListener('popstate', handlePathChange);
//       return () => window.removeEventListener('popstate', handlePathChange);
//     }, []);

//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };

//   const DrawerList = (
//     <Box sx={{ width: 150, height:1000}} role="presentation" onClick={toggleDrawer(false)}  className={`${style.sidebar}`}>
//       <List>
//         {['/Home', '/About', '/Projects'].map((link, index) => (
//                 <Link
//                   key={index}
//                   to={link}
//                   className={`${style.nav_link} ${activeLink === link ? style.active : ''} d-flex flex-colume`}
//                 >
//                   {link.replace('/', '').charAt(0).toUpperCase() + link.slice(2)}
//                 </Link>
//               ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <Button onClick={toggleDrawer(true)} className={style.btn1}><FaList /></Button>
//       <Drawer open={open} onClose={toggleDrawer(false)} >
//         {DrawerList}
//       </Drawer>
//     </div>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { FaList, FaHome, FaUserAlt, FaProjectDiagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import style from './NavDrawer.module.css';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState(window.location.pathname || '/home');

  React.useEffect(() => {
    const handlePathChange = () => {
      setActiveLink(window.location.pathname);
    };

    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navItems = [
    { path: '/Home', label: 'Home', icon: <FaHome /> },
    { path: '/About', label: 'About', icon: <FaUserAlt /> },
    { path: '/Projects', label: 'Projects', icon: <FaProjectDiagram /> },
  ];

  const DrawerList = (
    <Box
      sx={{ width: 220 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className={style.sidebar}
    >
      <List className={style.nav_list}>
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`${style.nav_link} ${activeLink === item.path ? style.active : ''}`}
          >
            <span className={style.icon}>{item.icon}</span>
            <span className={style.label}>{item.label}</span>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} className={style.btn1}>
        <FaList />
      </Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
