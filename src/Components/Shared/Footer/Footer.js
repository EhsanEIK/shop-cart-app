import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content mt-32 p-10">
            <div className='container mx-auto md:flex justify-between items-center block'>
                <div className='md:block flex justify-center'>
                    <Link to='/' className="btn btn-ghost normal-case text-3xl">
                        <span className='font-bold'>shop</span>
                        <span className='font-normal'>cart</span>
                    </Link>
                </div>
                <div className='flex justify-evenly gap-5 md:mt-0 mt-5'>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Help</Link>
                </div>
                <div className='md:block flex justify-center'>
                    <select className="bg-neutral text-white w-full md:mt-0 mt-5">
                        <option selected>English</option>
                        <option>Bangla</option>
                    </select>
                </div>
            </div>
        </footer>
    );
};

export default Footer;