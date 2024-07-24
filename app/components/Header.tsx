'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className='bg-black text-white p-4 flex flex-col md:flex-row justify-between fixed w-full'>
      <div className='flex justify-center md:justify-start'>
        <Image src={'/assets/images/logo.png'} alt='SOLA' width={200} height={50} className='h-auto' />
      </div>
      <nav className='flex flex-col md:flex-row gap-2 md:gap-4 m-2 pr-4 text-lg'>
        <Link href='/' className={`hover:text-xl ${pathname === '/' ? 'text-gold' : 'text-white'}`}>
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
