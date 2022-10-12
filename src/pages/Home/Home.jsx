import React from 'react'
import { Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import './Home.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#b2d9efa6',
  ...theme.typography.body2,
  padding: '3px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = props => {
  return (
    <div className='home'>
      <h4>Productos - mapeo de peticiones</h4>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid className="card-container" item xs={6} lg={4}>
          <Item className='item-container home-item-container'>
            <div className='item-image home-item-image'>
              <span className='method get'>get</span>
            </div>
            <div className='item-info'>
              <span className='path'>/api/productos</span>
              <span className='home-item-description'>Al hacer click en PRODUCTS o ABM PRODUCTS en la barra de navegación a través de axios requerimos al endpoint todos los productos disponibles</span>
            </div>
          </Item>
        </Grid>
        <Grid className="card-container"  item xs={6} lg={4}>
          <Item className='item-container home-item-container'>
            <div className='item-image home-item-image'>
              <span className='method get'>get</span>
            </div>
            <div className='item-info'>
              <span className='path'>/api/productos/:id</span>
              <span className='home-item-description'>Está implementado al hacer click en el lapiz para editar los productos en ABM PRODUCTS. La Api nos devuelve el producto a través del ID único que lo identifica</span>
            </div>
          </Item>
        </Grid>
        <Grid className="card-container" item xs={6} lg={4}>
          <Item className='item-container home-item-container'>
            <div className='item-image home-item-image'>
              <span className='method post'>post</span>
            </div>
            <div className='item-info'>
              <span className='path'>/api/productos</span>
              <span className='home-item-description'>Está implementado al hacer click en el botón ADD PRODUCT dentro de ABM PRODUCTS. Al llenar todos los campos requeridos a través de este post se guarda el nuevo producto a través de FS en productos.txt</span>
            </div>
          </Item>
        </Grid>
        <Grid className="card-container" item xs={6} lg={4}>
          <Item className='item-container home-item-container'>
            <div className='item-image home-item-image'>
              <span className='method put'>put</span>
            </div>
            <div className='item-info'>
              <span className='path'>/api/productos/:id</span>
              <span className='home-item-description'>Está implementado al hacer click en el lapiz para editar los productos en ABM PRODUCTS. Al modificar un campo del formulario y clickear en SAVE CHANGES se ejecuta el put y se guardan los cambios en productos.txt</span>
            </div>
          </Item>
        </Grid>
        <Grid className="card-container" item xs={6} lg={4}>
          <Item className='item-container home-item-container'>
            <div className='item-image home-item-image'>
              <span className='method delete'>delete</span>
            </div>
            <div className='item-info'>
              <span className='path'>/api/productos/:id</span>
              <span className='home-item-description'>Está implementado al hacer click en el boton CLOSE (X) en ABM PRODUCTS. Se ejecuta una petición delete que elimina el producto de productos.txt</span>
            </div>
          </Item>
        </Grid>
      </Grid>
      <h4>FAKER Productos - mapeo de peticiones</h4>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid className="card-container" item xs={6} lg={4}>
          <Item className='item-container home-item-container'>
            <div className='item-image home-item-image'>
              <span className='method get'>get</span>
            </div>
            <div className='item-info'>
              <span className='path'>/api/productos-test/:cantidad</span>
              <span className='home-item-description'>Al hacer click en FAKER PRODUCTS en la barra de navegación a través de axios requerimos al endpoint una lista de productos generados con la librería Faker. La cantidad a generar la elegimos con el input disponible.</span>
            </div>
          </Item>
        </Grid>
      </Grid>
      <h4>Carritos - mapeo de peticiones</h4>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid className="card-container" item xs={6} lg={4}>
          <Item className='item-container home-item-container'>
            <div className='item-image home-item-image'>
              <span className='method post'>post</span>
            </div>
            <div className='item-info'>
              <span className='path'>/api/carrito</span>
              <span className='home-item-description'>Dentro de PRODUCTS cuando agregamos por primera vez un producto se ejecuta esta petición POST. Con ella se crea y guarda un carrito en carrito.txt y nos devuelve su id que mantendremos en memoria</span>
            </div>
          </Item>
        </Grid>
        <Grid className="card-container" item xs={6} lg={4}>
          <Item className='item-container home-item-container'>
            <div className='item-image home-item-image'>
              <span className='method post'>post</span>
            </div>
            <div className='item-info'>
              <span className='path'>/api/carrito/:id/productos</span>
              <span className='home-item-description'>Está implementado al hacer click en ADD TO CART en PRODUCTS. Se envía una petición post que guarda al carrito creado anteriormente los id de productos dentro de una array en la key productos</span>
            </div>
          </Item>
        </Grid>
        <Grid className="card-container" item xs={6} lg={4}>
          <Item className='item-container home-item-container'>
            <div className='item-image home-item-image'>
              <span className='method get'>get</span>
            </div>
            <div className='item-info'>
              <span className='path'>/api/carrito/:id/productos</span>
              <span className='home-item-description'>Está implementado al hacer click en el botón del carrito de la APPBAR (arriba a la derecha). Al clickear se hace una petición get que trae el carrito cuyo id está en memoria y busca para cada product id la info del producto almacenada en productos.txt. El contenido del carrito se muestra en un modal </span>
            </div>
          </Item>
        </Grid>
        <Grid className="card-container" item xs={6} lg={4}>
          <Item className='item-container home-item-container'>
            <div className='item-image home-item-image'>
              <span className='method delete'>delete</span>
            </div>
            <div className='item-info'>
              <span className='path'>/api/carrito/:id</span>
              <span className='home-item-description'>Está implementado al hacer click en el botón ELIMINAR CARRITO que se encuentra en el modal que se abre al clickear el botón CARRITO de la APPBAR. Elimina el carrito completamente de carrito.txt</span>
            </div>
          </Item>
        </Grid>
        <Grid className="card-container" item xs={6} lg={4}>
          <Item className='item-container home-item-container'>
            <div className='item-image home-item-image'>
              <span className='method delete'>delete</span>
            </div>
            <div className='item-info'>
              <span className='path'>/api/carrito/:id/productos/:id_prod</span>
              <span className='home-item-description'>Está implementado al hacer click en el botón TRASH que se encuentra en la ventana modal que se abre al clickear en el CARRITO de la APPBAR. Se envía una petición delete que elimina del carrito los productos que contengas el id del producto.</span>
            </div>
          </Item>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home