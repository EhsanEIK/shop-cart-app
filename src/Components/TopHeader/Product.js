import React from 'react';

const Product = ({ product }) => {
    const { name, picture, price, discount } = product;

    return (
        <div className="w-full bg-base-100  md:p-4 p-10">
            <figure><img src={picture} alt={name} /></figure>
            <div>
                <h2 className="text-lg font-bold">{name}</h2>
                <div className="flex justify-between p-0 m-0">
                    <p>${price}</p>
                    <p className='text-red-600 font-semibold'>-{discount}% off</p>
                </div>
            </div>
        </div>
    );
};

export default Product;