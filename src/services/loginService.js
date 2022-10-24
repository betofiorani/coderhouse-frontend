import axios from 'axios'

const baseUrl = process.env.REACT_APP_BACKEND_URL;
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, PATCH, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Credentials': true
};

const login = async (userData) => {
    const {data} = await axios.post(`${baseUrl}/api/login`,{userName : userData.name, password: userData.password},{headers, withCredentials: true})
    return data
}

const logout = async () => {
  const {data} = await axios.get(`${baseUrl}/api/login/logout`,{headers, withCredentials: true})
  return data
}

export {login, logout}
