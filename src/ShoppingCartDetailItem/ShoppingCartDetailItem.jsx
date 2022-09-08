import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './ShoppingCartDetailItem.css'
import { IconButton } from '@mui/material';

const ShoppingCartDetailItem = ({producto, deleteHandler}) => {

  console.log("desde item", producto)
  console.log("desde item delete", deleteHandler)

  return (
    <div className='shopping-cart-item'>
      <div className='item-image'>
        <img src={producto.foto} alt={producto.nombre}/>
      </div>
      <div className='product-info'>{producto.nombre}</div>
      <div className='price-info'>
        <span className='item-cantidad'>1u</span>
        <span className='item-precio'>${producto.precio}</span>
      </div>
      <div className='btn-delete'>
        <IconButton onClick={() => deleteHandler(producto.id)}>
          <DeleteForeverIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default ShoppingCartDetailItem