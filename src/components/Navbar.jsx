import Link from 'next/link';
import React from 'react';
const navLinks = [
    {
        path:'/',
        title:'Home'
    },
    {
        path:'/profile',
        title:'profile'
    },
    {
        path:'/about',
        title:'about'
    },
    {
        path:'/blogs',
        title:'Blogs'
    },
    {
        path:'/dashboard',
        title:'dashboard'
    },
]


const Navbar = () => {
    return (
        <div className='flex items-center justify-between container mx-auto'>
            <h1 className='text-3xl'>Start Next JS</h1>
            <ul className='flex justify-center items-center'>
                {
                    navLinks.map(({path,title}) =>
                    <li key={path} className='mx-2'>
                        <Link href={path}> {title}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Navbar;