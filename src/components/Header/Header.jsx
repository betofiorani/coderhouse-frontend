import React from 'react'
import Appbar from '../Appbar/Appbar'

const Header = ({shoppingCart, shoppingCartHandlers}) => {
  return (
    <div>
      <Appbar shoppingCart={shoppingCart} shoppingCartHandlers={shoppingCartHandlers}/>
    </div>
  )
}

export default Header