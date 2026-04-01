import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <Title>About Us</Title>
            <nav className='space-x-6 btn max-w-full text-red-600 bg-blue-600'>
                <Link className='btn max-w-full text-red-600 bg-blue-600' href={"/about/contact"}>contact</Link>
                <Link href={"/about/teams"}>Teams</Link>
            </nav>
        </div>
    );
};

export default page;