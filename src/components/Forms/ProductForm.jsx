import React, {useEffect,useState} from 'react'
import './ProductForm.css'
import { Button, TextField } from '@mui/material'
import { getProductById } from '../../services/productService'

const ProductForm = ({productoIdElegido, action, submitHandler}) => {

  const initialValues = {
    code: "",
    title: "",
    description: "",
    thumbnail: "",
    timestamp: "",
    price: "",
    stock: ""
  }

  const [nuevoProducto, setNuevoProducto] = useState(initialValues)

  useEffect(() => {
    // aca llamamos al get
    if(action !== "new"){
      const getProduct = async () =>{ 
        const producto = await getProductById(productoIdElegido)
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
          label="code"
          value={nuevoProducto.code}
          onChange={(e) => {
            let productoAux = {...nuevoProducto, code: e.target.value } 
            setNuevoProducto(productoAux)}
          }
        />
        <TextField
          sx={{marginBottom: '15px'}}
          required
          id="outlined-nombre"
          fullWidth
          label="title"
          value={nuevoProducto.title}
          onChange={(e) => {
            let productoAux = {...nuevoProducto, title: e.target.value } 
            setNuevoProducto(productoAux)}
          }
        />
        <TextField
          sx={{marginBottom: '15px'}}
          required
          id="outlined-descripcion"
          fullWidth
          label="description"
          value={nuevoProducto.description}
          onChange={(e) => {
            let productoAux = {...nuevoProducto, description: e.target.value } 
            setNuevoProducto(productoAux)}
          }
        />
        <TextField
          sx={{marginBottom: '15px'}}
          required
          id="outlined-foto"
          fullWidth
          label="url thumbnail"
          value={nuevoProducto.thumbnail}
          onChange={(e) => {
            let productoAux = {...nuevoProducto, thumbnail: e.target.value } 
            setNuevoProducto(productoAux)}
          }
        />
        <div className="input-horizontal" style={{marginBottom: '15px'}}>
          <TextField
            sx={{marginBottom: '15px'}}
            required
            id="outlined-precio"
            label="price"
            value={nuevoProducto.price}
            onChange={(e) => {
              let productoAux = {...nuevoProducto, price: e.target.value } 
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

export default ProductForm