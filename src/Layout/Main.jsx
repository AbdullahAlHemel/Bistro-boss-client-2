import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')

    return (
        <div className='max-w-6xl m-auto'>
           { noHeaderFooter || <Navbar></Navbar> }
           <Outlet></Outlet>
           { noHeaderFooter || <Footer></Footer> }
        </div>
    );
};

export default Main;