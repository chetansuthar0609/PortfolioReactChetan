import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import style from './Header.module.css';
import TemporaryDrawer from './NavDrawer';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname || '/home');

  useEffect(() => {
    const handlePathChange = () => {
      setActiveLink(window.location.pathname);
    };

    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  const links = ['/home', '/about', '/projects'];

  return (
    <>
      <div className={style.main}>
        <Navbar className="d-flex justify-content-between container">
          <Navbar.Brand as={Link} to='/home' className={style.brand}>CS</Navbar.Brand>
          <div className="d-md-block d-none">
            <div className={`${style.tabdiv} d-flex gap-5 justify-content-center align-items-center`}>
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link}
                  className={`${style.nav_link} ${activeLink === link ? style.active : ''}`}
                >
                  {link.replace('/', '').charAt(0).toUpperCase() + link.slice(2)}
                </Link>
              ))}
            </div>
          </div>
          <div className="d-block d-md-none"><TemporaryDrawer /></div>
        </Navbar>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
