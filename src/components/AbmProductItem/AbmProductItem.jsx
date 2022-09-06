import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import './AbmProductItem.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#b2d9efa6',
  ...theme.typography.body2,
  padding: '3px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AbmProductItem = ({producto, editClickHandler, deleteClickHandler}) => {
  return (
    <Grid item xs={6} lg={4}>
      <Item className='item-container'>
        <div className='item-image'>
          <img src={producto.foto} alt={producto.nombre}/>
        </div>
        <div className='item-info'>
          <span className='item-title'>{`#${producto.codigo} - ${producto.nombre}`}</span>
          <span className='item-description'>{producto.descripcion}</span>
        </div>
        <div className='item-precio'>
          <div className='precio-container'>
            <span className='span-precio'>${producto.precio}</span>
            <span className='span-stock'>{producto.stock}u</span>
          </div>
          <div className='actions-container'>
            <IconButton onClick={() => editClickHandler(producto.id)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteClickHandler(producto.id)}>
              <CloseIcon />
            </IconButton>
          </div>
          
        </div>
      </Item>
    </Grid>
  )
}

AbmProductItem.propTypes = {}

export default AbmProductItem