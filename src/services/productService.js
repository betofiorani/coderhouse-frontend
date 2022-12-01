import axios from 'axios'

axios.defaults.withCredentials = true

const baseUrl = process.env.REACT_APP_BACKEND_URL;
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, PATCH, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Credentials': true
};

const getProducts = async () => {

  const {data} = await axios.get(`${baseUrl}/api/productos`,{headers, withCredentials: true, credentials: 'include'})
  return data
}

const getFakerProducts = async (cantidad) => {

  const {data} = await axios.get(`${baseUrl}/api/productos-test/${cantidad}`,{headers, withCredentials: true, credentials: 'include'})
  return data
}

const getProductById = async (id) => {

  const {data} = await axios.get(`${baseUrl}/api/productos/${id}`,{headers, withCredentials: true, credentials: 'include'})
  return data
}

const createProduct = async (productData) => {
  
  const {data} = await axios.post(`${baseUrl}/api/productos`,productData,{headers, withCredentials: true, credentials: 'include'})
  return data
}

const updateProduct = async (productData) => {

  const {data} = await axios.put(`${baseUrl}/api/productos/${productData._id}`,productData,{headers, withCredentials: true, credentials: 'include'})
  return data
}

const deleteProduct = async productId => {
  const {data} = await axios.delete(`${baseUrl}/api/productos/${productId}`,{headers, withCredentials: true, credentials: 'include'})
  return data
}

export {getProducts, createProduct, deleteProduct, getProductById, updateProduct, getFakerProducts}