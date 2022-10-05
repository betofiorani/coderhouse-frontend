import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Product from '../../components/Product/Product';
import { getFakerProducts } from '../../services/productService';
import './FakerProducts.css'
import { TextField } from '@mui/material';

const FakerProducts = (props) => {

  const shoppingCartHandlers = {
    addProduct: async (productId) => {
      console.log("agregar producto falso no vale la pena ajja")
    },
    deleteProduct: async productId => {
      console.log("agregar producto falso no vale la pena ajja")
    },
    deleteCart: async (id) => {
      console.log("agregar producto falso no vale la pena ajja")  
    }
  }

  const [productos, setProductos] = useState()
  const [cantidad, setCantidad] = useState(5)

  useEffect(() => {

    const getProductos = async () =>{ 
      const productos = await getFakerProducts(cantidad)
      setProductos(productos)
    }

    getProductos()
    
  }, [cantidad])
  
  return (
    
    <Box sx={{ marginRight: 'auto', marginLeft: 'auto', width: '90%', marginTop: '30px', marginBottom: '30px' }}>
      <div className='main-header faker-header'>
        <h5 className='page-title faker'>Faker Productos</h5>
        <div className='faker-textfield'>
          <TextField 
            type="number"
            label="Cantidad a mostrar"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
      </div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
        {productos && productos.map(producto => <Product key={producto._id} producto={producto} shoppingCartHandlers={shoppingCartHandlers} />)}
      </Grid>
    </Box>
  )
}

export default FakerProducts