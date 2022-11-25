import React from 'react';

const TopHeader = () => {
    return (
        <section className='mt-20'>
            <div className='lg:grid lg:grid-cols-7 h-[500px]'>
                <div className='col-span-3 flex justify-center items-center'>
                    <p className='text-7xl'>
                        We picked<br />
                        some <span className='text-orange-400'>cool</span><br />
                        <span className='text-orange-400'>things</span> for<br />
                        you!
                    </p>
                </div>
                <div className='col-span-4'>
                    <h2 className='border-b-2 border-dashed border-orange-600 font-semibold text-2xl'>hot deals for you</h2>
                </div>
            </div>
        </section>
    );
};

export default TopHeader;