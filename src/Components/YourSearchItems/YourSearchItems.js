import React from 'react';
import image1 from '../../assets/searchSectionImages/image1.png';
import image2 from '../../assets/searchSectionImages/image2.png';
import image3 from '../../assets/searchSectionImages/image3.png';
import image4 from '../../assets/searchSectionImages/image4.png';
import image5 from '../../assets/searchSectionImages/image5.png';
import image6 from '../../assets/searchSectionImages/image6.png';

const YourSearchItems = () => {
    return (
        <section className='mt-32'>
            <div className='col-span-5 md:mt-0 mt-20'>
                <h2 className='border-b-2 border-dashed border-orange-600 font-semibold text-2xl md:mx-0 mx-8'>Your searched items</h2>
                <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-3 mt-10 md:mx-0 mx-3'>
                    <img src={image1} alt="" className='w-full' />
                    <img src={image2} alt="" className='w-full' />
                    <img src={image3} alt="" className='w-full' />
                    <img src={image4} alt="" className='w-full' />
                    <img src={image5} alt="" className='w-full' />
                    <img src={image6} alt="" className='w-full' />
                </div>
            </div>
        </section>
    );
};

export default YourSearchItems;