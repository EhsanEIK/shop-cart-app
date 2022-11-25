import React, { useEffect, useState } from 'react';
import ProductCard from '../Shared/ProductCard/ProductCard';

const TodaysDeal = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('fakeApi.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    return (
        <section className='mt-32'>
            <div className='col-span-5 md:mt-0 mt-20'>
                <h2 className='border-b-2 border-dashed border-orange-600 font-semibold text-2xl md:mx-0 mx-8'>Today's hot deals</h2>
                <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-3 mt-10 md:mx-0 mx-3'>
                    {
                        products.map(product => {
                            if (product._id >= 7 && product._id <= 11) {
                                return <ProductCard
                                    key={product._id}
                                    product={product}></ProductCard>
                            }
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default TodaysDeal;