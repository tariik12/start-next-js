
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'start next js',
  description: 'start next js',
}
 const  RootLayout =({
  children,
})=> {
  console.log('from RootLayout')
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='text-center'>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
        {children}
        <footer className='text-center'> Copy right by Tarik</footer>
        </body>
    </html>
  )
}
export default RootLayout;