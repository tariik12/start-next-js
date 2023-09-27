import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'start next js',
  description: 'start next js',
}

 const  RootLayout =({
  children,
}: {
  children: React.ReactNode
})=> {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='text-center'>
          <a href="#">Home</a>
        </nav>
        {children}
        <footer className='text-center'> Copy right by Tarik</footer>
        </body>
    </html>
  )
}
export default RootLayout;