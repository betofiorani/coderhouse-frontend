import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import { simpleAlert } from '../../helpers/alerts'
import ShoppingCartDetailItem from '../../ShoppingCartDetailItem/ShoppingCartDetailItem'
import './ShoppingCartDetail.css'

const ShoppingCartDetail = ({shoppingCart, shoppingCartHandlers, handleModalClose}) => {

  return (
    <div className='modal-container'>
      <div className='modal-header'>
        <h5 className='modal-title'>Tu Carrito</h5>
      </div>
      <div className='cart-item-container'>
        {
          shoppingCart 
          ? shoppingCart.productos.map((producto, index) => <ShoppingCartDetailItem key={`${producto.productoId}-${index}`} producto={producto.productoId} deleteHandler={shoppingCartHandlers && shoppingCartHandlers.deleteProduct}/>)
          : "no hay productos en el carrito"
        }
      </div>
      <div className='modal-footer'>
        <Button
          variant='contained'
          onClick={() => {
            handleModalClose()
            shoppingCartHandlers.deleteCart(shoppingCart._id)
            }
          }
        >
          Eliminar Carrito
        </Button>
      </div>
    </div>
  )
}

ShoppingCartDetail.propTypes = {}

export default ShoppingCartDetail