import React from 'react'
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = (props) => {
  return (
    <div className='layout'>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  )
}

Layout.propTypes = {}

export default Layout