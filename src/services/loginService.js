import axios from 'axios'

const baseUrl = process.env.REACT_APP_BACKEND_URL;
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, PATCH, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Credentials': true
};

const login = async (userData) => {
  console.log("desde login", userData)
  const {data} = await axios.post(`${baseUrl}/api/login`,userData,{headers, withCredentials: true})
  return data
}

const register = async (userData) => {
  const {data} = await axios.post(`${baseUrl}/api/register`,userData,{headers, withCredentials: true})
  return data
}

const logout = async () => {
  const {data} = await axios.get(`${baseUrl}/api/login/logout`,{headers, withCredentials: true})
  console.log("desde logout", data)
  return data
}

export {login, logout, register}
