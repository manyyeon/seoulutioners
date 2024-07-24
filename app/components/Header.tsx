import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className='bg-black text-white p-4 flex justify-between'>
      <Image src={'/assets/images/logo.png'} alt='seoulutioners' width={200} height={800} />
      <nav className='flex gap-2 m-2'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
      </nav>
    </header>
  );
};

export default Header;
