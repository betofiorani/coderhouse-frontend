import axios from 'axios'

const baseUrl = process.env.REACT_APP_BACKEND_URL;
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, PATCH, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Credentials': true
};

const newShoppingCart = async () => {

  const {data} = await axios.post(`${baseUrl}/api/carrito`,{headers, withCredentials: true})
  return data
}

const addProductShoppingCart = async (shoppingCartId, productId) => {

  const {data} = await axios.post(`${baseUrl}/api/carrito/${shoppingCartId}/productos`,{productId},{headers, withCredentials: true})
  return data
}

const getProductShoppingCart = async (shoppingCartId) => {
  
  const {data} = await axios.get(`${baseUrl}/api/carrito/${shoppingCartId}/productos`,{headers, withCredentials: true})
  return data
}

const deleteProductShoppingCart = async (shoppingCartId, productId) => {
  
  const {data} = await axios.delete(`${baseUrl}/api/carrito/${shoppingCartId}/productos/${productId}`,{headers, withCredentials: true})
  return data
}

const deleteShoppingCart = async (shoppingCartId) => {
  
  const {data} = await axios.delete(`${baseUrl}/api/carrito/${shoppingCartId}`,{headers, withCredentials: true})
  return data
}

export {newShoppingCart, addProductShoppingCart, getProductShoppingCart, deleteProductShoppingCart,deleteShoppingCart}