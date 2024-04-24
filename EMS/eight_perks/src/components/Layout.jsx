import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout({children}) {
  return (
    <div >
        <Header/>
        <main className=''>
          <ToastContainer/>
        {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout