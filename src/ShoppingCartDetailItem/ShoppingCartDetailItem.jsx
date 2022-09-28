import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './ShoppingCartDetailItem.css'
import { IconButton } from '@mui/material';

const ShoppingCartDetailItem = ({producto, deleteHandler}) => {

  return (
    <div className='shopping-cart-item'>
      <div className='item-image'>
        <img src={producto.thumbnail} alt={producto.title}/>
      </div>
      <div className='product-info'>{producto.title}</div>
      <div className='price-info'>
        <span className='item-cantidad'>1u</span>
        <span className='item-precio'>${producto.price}</span>
      </div>
      <div className='btn-delete'>
        <IconButton onClick={() => deleteHandler(producto._id)}>
          <DeleteForeverIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default ShoppingCartDetailItem