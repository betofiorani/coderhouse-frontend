import axios from 'axios'

const baseUrl = process.env.REACT_APP_BACKEND_URL;
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, PATCH, POST, DELETE, OPTIONS',
};

const getProducts = async () => {

  const {data} = await axios.get(`${baseUrl}/api/productos`,{headers})

  return data
}

const getProductById = async (id) => {

  const {data} = await axios.get(`${baseUrl}/api/productos/${id}`,{headers})

  return data
}


const createProduct = async (productData) => {
  const {data} = await axios.post(`${baseUrl}/api/productos`,productData,{headers})
  
  return data
}

const updateProduct = async (productData) => {
  const {data} = await axios.put(`${baseUrl}/api/productos/${productData.id}`,productData,{headers})
  
  return data
}

const deleteProduct = async productId => {
  const {data} = await axios.delete(`${baseUrl}/api/productos/${productId}`,{headers})

  return data
}

export {getProducts, createProduct, deleteProduct, getProductById, updateProduct}