import React, { useState } from "react";

const Navbar2 = () => {
    const [menuBtn, setMenuBtn] = useState(false)
    const handleToggleButton = () => {
        setMenuBtn(!menuBtn)
    }

    return (
        <>
            <nav className="bg-blue-100 shadow-lg hover:bg-blue-400">
                <div className="max-w-full mx-auto py-2 md:py-4 px-4 md:px-2 lg:px-24 md:border-b-2 md:border-blue-600">
                    <div className="flex justify-between items-center ">
                        <div className="flex-shrink-0 md:hover:animate-ping">
                            <a href="#" className="text-2xl md:text-xl lg:text-2xl font-bold hover:shadow-2xl hover:text-gray-800">
                                logo
                            </a>
                        </div>

                        <div className="hidden md:flex md:space-x-16 font-serif font-semibold">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Projects</a>
                            <a href="#">Contact</a>
                            <a href="#">Login</a>
                            <a href="#">Signup</a>
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
                {/* for mobile responsiveness */}
                <div className={ `${menuBtn ? "block" : "hidden"} md:hidden flex flex-col gap-4 justify-center items-center border-y-2 py-2 border-black` }>
                    <a href="#" className="text-xl hover:text-blue-700">Home</a>
                    <a href="#" className="text-xl">About</a>
                    <a href="#" className="text-xl">Projects</a>
                    <a href="#" className="text-xl">Contact</a>
                    <a href="#" className="text-xl">Login</a>
                    <a href="#" className="text-xl">Signup</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar2