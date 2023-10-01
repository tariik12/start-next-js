import type { Metadata } from 'next'
import React from 'react';
export const metadata: Metadata = {
    title: 'About || start next js',
    description: 'start next js',
  }
  
const AboutPage = () => {
    return (
        <div>
            <h1>Hello About Page</h1>
        </div>
    );
};

export default AboutPage;