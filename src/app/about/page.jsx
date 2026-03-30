import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <Title>About Us</Title>
            <nav className='space-x-6'>
                <Link href={"/about/contact"}>contact</Link>
                <Link href={"/about/teams"}>Teams</Link>
            </nav>
        </div>
    );
};

export default page;