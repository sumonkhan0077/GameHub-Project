import React from 'react';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  const location = useLocation(); 
    useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,    
    });
  }, []);

  
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer/>
        </div>
    );
};

export default MainLayout;