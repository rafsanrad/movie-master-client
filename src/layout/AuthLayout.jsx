import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='py-5 w-11/12 mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;