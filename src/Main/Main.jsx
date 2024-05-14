import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import { useEffect } from 'react';

const Main = () => {
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname === '/') {
      document.title = `D-Cafe - HOME`;
    } else {
      document.title = `D-Cafe ${loc.pathname.replace('/', '-')}`;
    }
  }, [loc.pathname]);
  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
