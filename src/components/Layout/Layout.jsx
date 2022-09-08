import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({shoppingCart, shoppingCartHandlers}) => {

  return (
    <div className='layout'>
      <Header shoppingCart={shoppingCart} shoppingCartHandlers={shoppingCartHandlers}/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout