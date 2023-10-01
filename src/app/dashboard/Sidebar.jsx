import { link } from 'fs';
import Link from 'next/link';
import React from 'react';

const navLinks =[
    {
        path:'/dashboard',
        title:'dashboard'
    },
    {
        path:'/dashboard/add-product',
        title:'Add-product'
    },
    {
        path:'/dashboard/manage-product',
        title:'Manage-product'
    },
    {
        path:'/',
        title:'Home'
    }
]
const Sidebar = () => {
    return (
        <aside>
            <ul>
                {navLinks.map(({title,path})=><li key={path}>

           <Link href={path}>{title}</Link>

                </li>)}
            </ul>
        </aside>
    );
};

export default Sidebar;