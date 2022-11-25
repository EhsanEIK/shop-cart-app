import React, { useEffect, useState } from 'react';
import Product from './Product';

const TopHeader = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('fakeApi.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    return (
        <section className='mt-20'>
            <div className='lg:grid lg:grid-cols-8'>
                <div className='col-span-3 flex justify-center items-center'>
                    <p className='text-7xl'>
                        We picked<br />
                        some <span className='text-orange-400'>cool</span><br />
                        <span className='text-orange-400'>things</span> for<br />
                        you!
                    </p>
                </div>
                <div className='col-span-5 md:mt-0 mt-20'>
                    <h2 className='border-b-2 border-dashed border-orange-600 font-semibold text-2xl md:mx-0 mx-8'>hot deals for you</h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-3 md:mx-0 mx-3'>
                        {
                            products.map(product => {
                                if (product._id < 7) {
                                    return <Product
                                        key={product._id}
                                        product={product}></Product>
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopHeader;