import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartItems } = useSelector(state => state.cartItems);
    //logic for handling icon show and hide   
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={`${isOpen ? 'border' : 'border flex'} dark:bg-gray-800  p-3 shadow-md lg:px-32 md:px-10`}>
            <div className="max-w-screen-2xl container mx-auto flex justify-between items-center">
                <div className="dark:text-white text-xl font-semibold">Online Clothing</div>
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="dark:text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isOpen
                                        ? 'M6 18L18 6M6 6l12 12'
                                        : 'M4 5h16M4 12h16M4 19h16'
                                }
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className={`${isOpen ? 'block ' : 'hidden'
                    } w-full md:w-auto md:flex md:items-center`}
            >
                <ul className="md:flex md:space-x-4 dark:text-white font-semibold">
                    <li>
                        <NavLink to="/" className={({ isActive }) =>
                           `block py-2 px-4 ${isActive ? "bg-lime-100 dark:text-black" : ""}`
                        }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/wishlist"  className={({ isActive }) =>
                           `block py-2 px-4 ${isActive ? "bg-lime-100 dark:text-black" : ""}`
                        }>
                            Wishlist
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart"  className={({ isActive }) =>
                           `block py-2 px-4 ${isActive ? "bg-lime-100 dark:text-black" : ""}`
                        }>
                            Cart{`(${cartItems.length})`}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
