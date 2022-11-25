import React from 'react';
import Navbar from '../../../Components/Shared/Navbar/Navbar';
import TopHeader from '../../../Components/TopHeader/TopHeader';
import AlexaSection from '../../../Components/AlexaSection/AlexaSection';
import TodaysDeal from '../../../Components/TodaysDeal/TodaysDeal';

const Home = () => {
    return (
        <div>
            <div className='container mx-auto mb-10'>
                <Navbar></Navbar>
                <TopHeader></TopHeader>
                <AlexaSection></AlexaSection>
                <TodaysDeal></TodaysDeal>
            </div>
        </div>
    );
};

export default Home;