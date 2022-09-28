import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';
import Products from './pages/Products/Products';
import AbmProducto from './pages/AbmProducto/AbmProducto';
import { newShoppingCart, addProductShoppingCart, getProductShoppingCart, deleteProductShoppingCart, deleteShoppingCart } from './services/shoppingCartService';
import { alertWithTimer, simpleAlert } from './helpers/alerts';
import Swal from 'sweetalert2';

function App() {

  const [shoppingCart, setShoppingCart] = useState(null);

  // CART HANDLERS
  const shoppingCartHandlers = {
    addProduct: async (productId) => {
      const shoppingCartAux = shoppingCart

      let shoppingCartUpdated
      
      if(!shoppingCartAux){
        const {shoppingCartId} = await newShoppingCart()
        await addProductShoppingCart(shoppingCartId, productId)
        shoppingCartUpdated = await getProductShoppingCart(shoppingCartId)
      }
      else {
        await addProductShoppingCart(shoppingCartAux._id, productId)
        shoppingCartUpdated = await getProductShoppingCart(shoppingCartAux._id)
      }
      alertWithTimer(`Product added Successfully`,"success", 1500, "")
      setShoppingCart(shoppingCartUpdated[0])
    },
    deleteProduct: async productId => {
      const shoppingCartAux = shoppingCart

      await deleteProductShoppingCart(shoppingCartAux._id, productId)
      const shoppingCartUpdated = await getProductShoppingCart(shoppingCartAux._id)
      simpleAlert(`Product deleted Successfully`,"success")
      setShoppingCart(shoppingCartUpdated[0])
    },
    deleteCart: async (id) => {
      
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
              const response = await deleteShoppingCart(id)
              
              if(response.status === 'ok') {
                
                setShoppingCart(null)
                
                Swal.fire({
                  icon: 'success', 
                  showConfirmButton: false,
                  title: `<p>ShoppingCart deleted successfully</p>`,
                  timer: 1500
                })
              }
              else {
                Swal.fire({
                  icon: 'error', 
                  showConfirmButton: false,
                  title: `<p>Shopping Cart delete failed</p>`,
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
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout shoppingCart={shoppingCart} shoppingCartHandlers={shoppingCartHandlers} />}>
          <Route index element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/productos" element={<Products shoppingCartHandlers={shoppingCartHandlers} />} />
          <Route path="/productos/:id" element={<Products />} />
          <Route path="/admin/productos" element={<AbmProducto />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
