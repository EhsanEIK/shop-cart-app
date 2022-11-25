import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <TopHeader></TopHeader>
        </div>
    );
};

export default Home;