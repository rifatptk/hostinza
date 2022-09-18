import dynamic from 'next/dynamic'
import React from 'react';
import Header from './Header';
const Footer = dynamic(()=>import("../Footer"))
// import Footer from './Footer';


export default function Layout({children}) {
  return (
    <div className='w-full mx-auto items-center relative'>
        <Header/>
            <div className='main-rapper-col'>{children}</div>
        <Footer/>
    </div>
  )
}
