import React, { useState } from 'react';
import Logo from "../assets/images/UMKMConnect.png";
import { BiChevronDown } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownBuka, setDropdownBuka] = useState(false);

  const navigationItems = [
    { path: '/', label: 'Beranda' },
    { path: '/about', label: 'Tentang Kami' },
    { path: '/Kemitraan', label: 'Kemitraan' },
    { path: '/Artikel', label: 'Artikel' },
  ];

  const toggleDropdown = () => {
    setDropdownBuka(!dropdownBuka);
  };

  return (
    <>
      <nav className='w-full h-16  bg-white fixed z-[1000] flex'>
        <div className='flex items-center justify-between w-full'>
          <div>
            <h1 className='font-body font-bold text-xl text-primary px-14'>UMKMConnect</h1>
          </div>
          <div className='mr-10'>
            <div className='flex flex-grow justify-end items-center gap-10 pr-10'>
              {navigationItems.map((navItem, index) => (
                <Link
                  to={navItem.path}
                  key={index}
                  className={`font-body ${location.pathname === navItem.path ? 'text-primary' : 'text-secondary'} hover:text-primary`}
                >
                  {navItem.label}
                </Link>
              ))}
              <div className='relative'>
                <button
                  onClick={toggleDropdown}
                  className='font-body flex items-center text-secondary hover:text-primary'
                >
                  Produk <BiChevronDown className='text-xl ml-5' />
                </button>
                {dropdownBuka && (
                  <div className='absolute font-body mt-2 w-32 bg-white shadow-lg rounded-md'>
                    <Link to="/Makanan" className='block px-4 py-2 text-secondary hover:bg-primary hover:text-white'>
                      Makanan
                    </Link>
                    <Link to="/Minuman" className='block px-4 py-2 text-secondary hover:bg-primary hover:text-white'>
                      Minuman
                    </Link>
                    <Link to="/Busana" className='block px-4 py-2 text-secondary hover:bg-primary hover:text-white'>
                      Busana
                    </Link>
                    <Link to="/Kerajinan" className='block px-4 py-2 text-secondary hover:bg-primary hover:text-white'>
                      Kerajinan
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
