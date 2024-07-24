import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl">My Company</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
