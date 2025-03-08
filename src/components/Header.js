import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
        <ul className={`flex-col md:flex-row md:flex space-y-2 md:space-y-0 md:space-x-4 mt-2 md:mt-0 ${isOpen ? 'flex' : 'hidden'}`}>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li className="relative group">
            <button className="hover:underline focus:outline-none">More</button>
            <ul className="absolute left-0 hidden mt-2 w-48 bg-gray-700 group-hover:flex flex-col space-y-2 p-2">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
            </ul>
          </li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
