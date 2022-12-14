import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';
import Products from './pages/Products/Products';
import FakerProducts from './pages/FakerProducts/FakerProducts';
import AbmProducto from './pages/AbmProducto/AbmProducto';
import { newShoppingCart, addProductShoppingCart, getProductShoppingCart, deleteProductShoppingCart, deleteShoppingCart } from './services/shoppingCartService';
import { alertWithTimer, simpleAlert } from './helpers/alerts';
import Swal from 'sweetalert2';
import socketIO from 'socket.io-client';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './components/Auth/AuthProvider';
import ShowInfo from './components/ShowInfo/ShowInfo';
import RandomProcess from './components/RandomProcess/RandomProcess';

const socket = socketIO.connect(process.env.REACT_APP_BACKEND_URL);

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
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Layout shoppingCart={shoppingCart} shoppingCartHandlers={shoppingCartHandlers} />}>
            <Route index element={<Home />} />
            <Route path="/chat" element={<Chat socket={socket} />} />
            <Route path="/productos" element={<Products shoppingCartHandlers={shoppingCartHandlers} />} />
            <Route path="/productos/:id" element={<Products />} />
            <Route path="/faker-productos" element={<FakerProducts />} />
            <Route path="/admin/productos" element={<AbmProducto />} />
            <Route path="/info" element={<ShowInfo />} />
            <Route path="/random" element={<RandomProcess />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
