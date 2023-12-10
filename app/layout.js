'use client'
import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import {  usePathname } from 'next/navigation'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const path = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);

    };

    handleRouteChange()
  }, [path]);
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
