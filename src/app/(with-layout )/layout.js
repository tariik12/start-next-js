
import React from 'react';
import Navbar from '@/components/Navbar'
const WithLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <footer className='text-center'> Copy right by Tarik</footer>
        </div>
    );
};

export default WithLayout;