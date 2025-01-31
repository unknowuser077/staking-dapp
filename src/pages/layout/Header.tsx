// src/components/Header.tsx
import * as React from 'react';

export const Header: React.FC = () => {
    return (
        <header>
            <nav className="bg-gray-900 flex justify-between items-center px-20 py-6 max-md:p-10">
                <div className="text-2xl font-semibold text-white">icETH</div>
                <ul className="flex items-center space-x-4 gap-5 max-sm:hidden">
                    <li>
                        <a href="#" className="text-lg hover:text-gray-400 transition duration-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-lg hover:text-gray-400 transition duration-300">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-lg hover:text-gray-400 transition duration-300">
                            Contact us
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};