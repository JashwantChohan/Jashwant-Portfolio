import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#111C2E] text-[--color-text-primary] z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <h1 className="text-xl font-semibold cursor-pointer">Jashwant Chohan</h1>
                <ul className="hidden md:flex space-x-10 text-sm">
                    {["home", "about", "projects", "contact"].map((item) => (
                        <li key={item}>
                            <Link
                                to={item}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-[#f07665] transition-colors"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white focus:outline-none"
                >
                    ☰
                </button>
            </div>
            {isOpen && (
                <ul className="md:hidden bg-[#0d1824] px-6 pb-4 space-y-3 text-sm">
                    {["home", "about", "projects", "contact"].map((item) => (
                        <li key={item}>
                            <Link
                                to={item}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="block cursor-pointer hover:text-[#f07665] transition-colors"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
