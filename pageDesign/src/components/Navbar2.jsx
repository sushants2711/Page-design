import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar2 = () => {

    const [menuBtn, setMenuBtn] = useState(false)

    const handleToggleButton = () => {
        setMenuBtn(!menuBtn)
    }

    return (
        <>
            
      <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">

                <div className="max-w-full mx-auto py-2 md:py-4 px-4 md:px-2 lg:px-24">
                    <div className="flex justify-between items-center ">
                        <div className="flex-shrink-0">
                            <h1 className="text-xl font-bold  text-indigo-600">
                                Sushant Kr Singh
                            </h1>
                        </div>

                        <div className="hidden md:flex md:space-x-16 font-serif ">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/languages">Languages</Link>
                            <Link to="/contact">Contact</Link>
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
                <div className={`${menuBtn ? "block" : "hidden"} md:hidden flex flex-col gap-4 justify-center items-center border-y-2 py-2 border-black`}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/">Projects</Link>
                    <Link to="/">Languages</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar2