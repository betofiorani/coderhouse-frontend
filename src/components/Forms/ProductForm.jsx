import React, {useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import './ProductForm.css'
import { Button, TextField } from '@mui/material'
import { getProductById } from '../../services/productService'

const ProductForm = ({productoIdElegido, action, submitHandler}) => {

  const initialValues = {
    id:"",
    codigo: "",
    nombre: "",
    descripcion: "",
    foto: "",
    timestamp: "",
    precio: "",
    stock: ""
  }

  const [nuevoProducto, setNuevoProducto] = useState(initialValues)

  useEffect(() => {
    // aca llamamos al get
    if(action !== "new"){
      const getProduct = async () =>{ 
        const producto = await getProductById(productoIdElegido)
        console.log("desde useEffect", producto)
        setNuevoProducto(producto[0])
      }
  
      getProduct()
  
    }
  }, [])
  
  return (
    <div className='modal-container'>
      <div className='modal-header'>
        <h5 className='modal-title'>{action === "new" ? "New Product" : "Edit Product"}</h5>
      </div>
      <div className='form-producto'>
        <TextField
          sx={{marginBottom: '15px'}}
          required
          id="outlined-codigo"
          label="código"
          value={nuevoProducto.codigo}
          onChange={(e) => {
            console.log ("cambio", e.target.value)
            let productoAux = {...nuevoProducto, codigo: e.target.value } 
            setNuevoProducto(productoAux)}
          }
        />
        <TextField
          sx={{marginBottom: '15px'}}
          required
          id="outlined-nombre"
          fullWidth
          label="nombre"
          value={nuevoProducto.nombre}
          onChange={(e) => {
            console.log ("nombre", e.target.value)
            let productoAux = {...nuevoProducto, nombre: e.target.value } 
            setNuevoProducto(productoAux)}
          }
        />
        <TextField
          sx={{marginBottom: '15px'}}
          required
          id="outlined-descripcion"
          fullWidth
          label="descripcion"
          value={nuevoProducto.descripcion}
          onChange={(e) => {
            let productoAux = {...nuevoProducto, descripcion: e.target.value } 
            setNuevoProducto(productoAux)}
          }
        />
        <TextField
          sx={{marginBottom: '15px'}}
          required
          id="outlined-foto"
          fullWidth
          label="url foto"
          value={nuevoProducto.foto}
          onChange={(e) => {
            let productoAux = {...nuevoProducto, foto: e.target.value } 
            setNuevoProducto(productoAux)}
          }
        />
        <div className="input-horizontal" style={{marginBottom: '15px'}}>
          <TextField
            sx={{marginBottom: '15px'}}
            required
            id="outlined-precio"
            label="precio"
            value={nuevoProducto.precio}
            onChange={(e) => {
              let productoAux = {...nuevoProducto, precio: e.target.value } 
              setNuevoProducto(productoAux)}
            }
          />  
          <TextField
            sx={{marginBottom: '15px'}}
            required
            id="outlined-stock"
            label="stock"
            value={nuevoProducto.stock}
            onChange={(e) => {
              let productoAux = {...nuevoProducto, stock: e.target.value } 
              setNuevoProducto(productoAux)}
            }
          />  
        </div>
      </div>
      <div className='modal-footer'>
        <Button
          variant='contained'
          onClick={() => submitHandler(nuevoProducto, action)}
        >
          {action === "new" ? "add" : "save changes"}
        </Button>
      </div>
    </div>
  )
}

ProductForm.propTypes = {}

export default ProductForm