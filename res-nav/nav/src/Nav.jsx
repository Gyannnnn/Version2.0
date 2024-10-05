import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { ImCross } from "react-icons/im";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-green-200 w-screen h-10 flex justify-between items-center px-2'>
      <div className="logo">Logo</div>
      
      <div className={`flex gap-3 ${isMenuOpen ? 'flex-col absolute top-10 left-0 w-full bg-green-200 p-2 items-center' : 'hidden'} sm:flex sm:flex-row sm:static sm:bg-transparent `}>
        <a href="#" className='block py-1 sm:inline hover:bg-blue-600 hover:px-4 hover:rounded-md hover:text-white'>Home</a>
        <a href="#" className='block py-1 sm:inline hover:bg-blue-600 hover:px-4 hover:rounded-md hover:text-white'>About</a>
        <a href="#" className='block py-1 sm:inline hover:bg-blue-600 hover:px-4 hover:rounded-md hover:text-white'>Contact</a>
        <a href="#" className='block py-1 sm:inline hover:bg-blue-600 hover:px-4 hover:rounded-md hover:text-white'>Projects</a>
      </div>
      <div className='flex items-center gap-4'>
        
      <button className='bg-blue-600 px-4 py-1 rounded-md text-white font-bold'>Login</button>
      
      <CiMenuBurger 
        className='sm:hidden text-2xl cursor-pointer' 
        onClick={handleMenuToggle} 
        aria-label="Toggle Menu" 
      />
      </div>
    </div>
  );
}

export default Nav;
