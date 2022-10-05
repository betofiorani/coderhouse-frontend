import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { getProducts, createProduct, deleteProduct, updateProduct } from '../../services/productService';
import { Button, Modal } from '@mui/material';
import AbmProductItem from '../../components/AbmProductItem/AbmProductItem';
import './AbmProducto.css'
import ProductForm from '../../components/Forms/ProductForm';
import Swal from 'sweetalert2'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

const AbmProducts = props => {

  const [productos, setProductos] = useState()
  const [openModal, setOpenModal] = useState({open:false, action: ""});
  const [productoIdElegido, setProductoIdElegido] = useState()

  useEffect(() => {

    const getProductos = async () =>{ 
      const productos = await getProducts()
      setProductos(productos)
    }

    getProductos()
    
  }, [])
  
  // HANDLERS
  const handleModalOpen = (action) => setOpenModal({open:true, action:action});
  const handleModalClose = () => setOpenModal({open:false, action: ""});

  const editClickHandler = (ProductId) => {
    setProductoIdElegido(ProductId)
    handleModalOpen('edit')
  }

  const deleteClickHandler = async (productId) => {
    
      Swal.fire({
        title: "Are you sure?",
        icon: 'warning',
        showDenyButton: true,
        denyButtonText: "cancelar",
        confirmButtonText: "Eliminar",
      }).then(async (res) => {
        if (res.isConfirmed) {

            try {
              // borramos de la base
              const response = await deleteProduct(productId)
              
              if(response.status === "ok") {
                
                let productosAux = productos.filter(producto => producto._id !== productId)
                
                setProductos(productosAux)
                setProductoIdElegido("")
                Swal.fire({
                  icon: 'success', 
                  showConfirmButton: false,
                  title: `<p>Product deleted successfully</p>`,
                  timer: 1500
                })
              }
              else {
                Swal.fire({
                  icon: 'error', 
                  showConfirmButton: false,
                  title: `<p>Product delete failed</p>`,
                  timer: 1500
                })
              }
            } catch (error) {
              console.log(error)
            }
        }
        if (res.isDenied) {
            
        }
      });
      

  }

  const submitHandler = async (productData, action) => {

    if(action === "new"){

      try {
        const newProducto = await createProduct(productData)
        
        setProductos(productos => [...productos, newProducto])
        handleModalClose()
        Swal.fire({
          icon: 'success', 
          title: `<p>Product Added</p>`,
          text: "new product added successfully",
      })

      } catch (error) {
        console.log(error)
      }

    } else {
      // aca hago un put
      try {
        const productUpdated = await updateProduct(productData)
        
        let productosAux = productos.filter(producto => producto._id !== productUpdated._id)
        productosAux.push(productUpdated)
        setProductos(productosAux)
        handleModalClose()
        Swal.fire({
          icon: 'success', 
          title: `<p>Product updated</p>`,
          text: "Product updated successfully",
        })
      } 
      catch (error) {
        console.log(error)
      }
    }
  }

  return (
    
    <Box sx={{ marginRight: 'auto', marginLeft: 'auto', width: '90%', marginTop: '30px', marginBottom: '30px' }}>
      <div className='main-header'>
        <h5 className='page-title'>ABM Productos</h5>
        <div className='actions'>
          <div className='search'>
            <TextField 
              className='search-input'
              id="filled-basic" 
              label="buscar producto" 
              variant="filled" />
            <Button variant="contained">
              SEARCH 
            </Button>
          </div>
          <div className='btn-container'>
            <Button variant="contained" onClick={() => handleModalOpen('new')}>
              ADD NEW PRODUCT 
            </Button>
          </div>
        </div>
      </div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {productos && productos.map(producto => <AbmProductItem key={producto._id} producto={producto} editClickHandler={editClickHandler} deleteClickHandler={deleteClickHandler} />)}
      </Grid>
      <Modal
        open={openModal && openModal.open}
        onClose={handleModalClose}
      >
        <Box sx={modalStyle}>
          <ProductForm productoIdElegido={productoIdElegido} action={openModal.action} submitHandler={submitHandler} />
        </Box>
      </Modal>
    </Box>
  )
}

export default AbmProducts