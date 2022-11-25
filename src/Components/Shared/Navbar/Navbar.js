import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaSistrix, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 block text-md text-gray-500 gap-5">
                            <li>Fresh</li>
                            <li>Today's Deals</li>
                            <li>Mobiles</li>
                            <li>Gift Cards</li>
                            <li>Women Clothing</li>
                            <li>Men Clothing</li>
                            <li>Kids Clothing</li>
                            <li>Health</li>
                            <li>Pet Corner</li>
                            <li>Books</li>
                            <li>Beauty</li>
                            <li>Kitchen</li>
                            <li>Bed Room</li>
                            <li>Sport</li>
                            <li>Bags</li>
                        </ul>
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
            <div className="divider my-0"></div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <span className="flex justify-center items-center bg-orange-300 text-black rounded-xl px-2 py-2">
                        <FaMapMarkerAlt />
                        <span className='font-medium ml-1'>Dhaka, 1212</span>
                    </span>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control relative">
                        <input type="text" placeholder="Search" className="input input-bordered rounded-2xl md:w-[500px]" />
                        <FaSistrix className='absolute top-4 right-5' />
                    </div>
                </div>
            </div>
            <ul className='hidden lg:flex justify-center text-md text-gray-500 gap-5'>
                <li>Fresh</li>
                <li>Today's Deals</li>
                <li>Mobiles</li>
                <li>Gift Cards</li>
                <li>Women Clothing</li>
                <li>Men Clothing</li>
                <li>Kids Clothing</li>
                <li>Health</li>
                <li>Pet Corner</li>
                <li>Books</li>
                <li>Beauty</li>
                <li>Kitchen</li>
                <li>Bed Room</li>
                <li>Sport</li>
                <li>Bags</li>
            </ul>
        </div >
    );
};

export default Navbar;