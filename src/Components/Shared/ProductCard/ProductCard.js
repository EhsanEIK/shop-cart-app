import React from 'react';

const ProductCard = ({ product }) => {
    const { name, picture, price, discount } = product;

    return (
        <div className="relative w-full bg-base-100 md:p-4 p-10">
            <figure><img
                src={picture}
                alt={name}
                className="h-full w-full" /></figure>
            <div>
                <h2 className="text-lg font-bold my-8">{name}</h2>
                <div className='absolute bottom-0'>
                    <div className="flex p-0 m-0">
                        <p>${price}</p>
                        <p className='text-red-600 font-semibold md:ml-16 ml-28'>-{discount}% off</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;