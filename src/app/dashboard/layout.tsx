import type { Metadata } from 'next'
import React from 'react';
export const metadata: Metadata = {
    title: 'Dashboard || start next js',
    description: 'start next js',
  }
  
const DashboardLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
        <div>
            <div>sidebar</div>
            {children}
        </div>
    );
};

export default DashboardLayout;