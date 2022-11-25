import React from 'react';
import Navbar from '../../../Components/Shared/Navbar/Navbar';
import TopHeader from '../../../Components/TopHeader/TopHeader';
import AlexaSection from '../../../Components/AlexaSection/AlexaSection';

const Home = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Navbar></Navbar>
                <TopHeader></TopHeader>
                <AlexaSection></AlexaSection>
            </div>
        </div>
    );
};

export default Home;