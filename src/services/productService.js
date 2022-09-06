import axios from 'axios'

const getProducts = async () => {

  const {data} = await axios.get('http://localhost:8080/api/productos')

  return data
}

const getProductById = async (id) => {

  const {data} = await axios.get(`http://localhost:8080/api/productos/${id}`)

  return data
}


const createProduct = async (productData) => {
  const {data} = await axios.post(`http://localhost:8080/api/productos`,productData)
  
  return data
}

const updateProduct = async (productData) => {
  const {data} = await axios.put(`http://localhost:8080/api/productos/${productData.id}`,productData)
  
  return data
}

const deleteProduct = async productId => {
  const {data} = await axios.delete(`http://localhost:8080/api/productos/${productId}`)

  return data
}

export {getProducts, createProduct, deleteProduct, getProductById, updateProduct}