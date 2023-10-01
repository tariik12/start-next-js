
import React from 'react';
import Sidebar from "@/app/dashboard/Sidebar"
export const metadata = {
    title: 'Dashboard || start next js',
    description: 'start next js',
  }
  
const DashboardLayout = ({
    children,
  }) => {
    return (
        <div className='flex  container mx-auto'>
          <div  className='col-span-2'>

         <Sidebar/>
          </div>
          <div className='ms-10 flex justify-center items-center h-[600px]'>

            {children}
          </div>
        </div>
    );
};

export default DashboardLayout;