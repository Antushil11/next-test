import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='text-4xl flex flex-wrap justify-between items-center   border-b-2 border-gray-300 py-4'>
          <Link href={"/"}>🦈 Dev-Story</Link>
          <nav className='space-x-5 text-2xl'>
            <Link href="/about">About</Link>
            <Link href="/tutorials">tuotorial</Link>
            <Link href="/stories">stories</Link>

            <Link href="/login">login</Link>
            <Link href="/register">register</Link>
          </nav>
        </header>
    );
};

export default Header;