'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='bg-black text-white p-4 flex flex-col md:flex-row justify-between fixed w-full'>
      <div className='flex justify-between items-center w-full md:w-auto'>
        <Image src={'/assets/images/logo.png'} alt='SOLA' width={200} height={50} className='h-auto' />
        <button className='md:hidden text-white' onClick={toggleMenu}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </div>
      <nav
        className={`flex flex-col md:flex-row gap-2 md:gap-4 m-2 pr-4 text-lg ${
          menuOpen ? 'block' : 'hidden'
        } md:block `}
      >
        <Link href='/' className={`hover:text-xl md:mr-4 ${pathname === '/' ? 'text-gold' : 'text-white'}`}>
          ABOUT US
        </Link>
        <Link href='/products' className={`hover:text-xl ${pathname === '/products' ? 'text-gold' : 'text-white'}`}>
          PRODUCTS
        </Link>
      </nav>
    </header>
  );
};

export default Header;
