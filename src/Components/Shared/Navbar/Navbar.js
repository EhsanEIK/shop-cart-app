import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-3xl">
                    <span className='font-bold'>shop</span>
                    <span className='font-normal'>cart</span>
                </Link>
            </div>
            <div className="navbar-end">
                <button className='flex justify-center items-center rounded-xl bg-white px-3 py-1 hover:bg-slate-200'>
                    <FaUserCircle />
                    <span className='ml-2 font-semibold text-base'>Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;