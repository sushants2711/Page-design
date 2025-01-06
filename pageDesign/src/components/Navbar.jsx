import React, { useState } from "react";

const ResponsiveNavbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleToggleButton = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="bg-white shadow-md">
                <div className="max-w-full mx-auto px-4 md:px-8 py-2 md:py-4">
                    <div className="flex justify-between items-center">
                        {/* Logo section */}
                        <div className="flex-shrink-0">
                            <a href="#" className="text-3xl font-bold hover:text-blue-400">
                                Logo
                            </a>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden md:flex space-x-14">
                            <a href="#" className="text-xl text-gray-500 hover:text-red-200 font-serif">
                                Home
                            </a>
                            <a href="#" className="text-xl text-gray-500 hover:text-red-200 font-serif">
                                About
                            </a>
                            <a href="#" className="text-xl text-gray-500 hover:text-red-200 font-serif">
                                Services
                            </a>
                            <a href="#" className="text-xl text-gray-500 hover:text-red-200 font-serif">
                                Signup
                            </a>
                            <a href="#" className="text-xl text-gray-500 hover:text-red-200 font-serif">
                                Login
                            </a>
                            <a href="#" className="text-xl text-gray-500 hover:text-red-200 font-serif">
                                Logout
                            </a>
                        </div>

                        {/* Mobile button for navbar */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={handleToggleButton}
                                className="text-gray-700 hover:text-blue-600 focus:outline-none"
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
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu responsiveness */}
                <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} py-2 text-center`}>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-300 hover:text-blue-600"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-300 hover:text-blue-600"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-300 hover:text-blue-600"
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-300 hover:text-blue-600"
                    >
                        Signup
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-300 hover:text-blue-600"
                    >
                        Login
                    </a>
                </div>
            </nav>
        </>
    );
};

export default ResponsiveNavbar;
