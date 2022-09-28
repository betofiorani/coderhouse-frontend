import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Product from '../../components/Product/Product';
import { getProducts } from '../../services/productService';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import './Products.css'

const Products = ({shoppingCartHandlers}) => {

  const [productos, setProductos] = useState()

  useEffect(() => {

    const getProductos = async () =>{ 
      const productos = await getProducts()
      setProductos(productos)
    }

    getProductos()
    
  }, [])
  
  return (
    
    <Box sx={{ marginRight: 'auto', marginLeft: 'auto', width: '90%', marginTop: '30px', marginBottom: '30px' }}>
      <div className='main-header'>
        <h5 className='page-title'>Productos</h5>
        <div className='product-search'>
          <TextField 
            className='product-search-input'
            id="filled-basic" 
            label="buscar producto" 
            variant="filled" />
          <Button variant="contained">
            SEARCH 
          </Button>
        </div>
      </div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
        {productos && productos.map(producto => <Product key={producto._id} producto={producto} shoppingCartHandlers={shoppingCartHandlers} />)}
      </Grid>
    </Box>
  )
}

export default Products