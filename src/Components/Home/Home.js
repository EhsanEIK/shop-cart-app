import React from 'react';
import AlexaSection from '../AlexaSection/AlexaSection';
import Navbar from '../Shared/Navbar/Navbar';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <TopHeader></TopHeader>
            <AlexaSection></AlexaSection>
        </div>
    );
};

export default Home;