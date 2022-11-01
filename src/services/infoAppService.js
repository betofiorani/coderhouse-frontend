import axios from 'axios'

const baseUrl = process.env.REACT_APP_BACKEND_URL;
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, PATCH, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Credentials': true
};

const getInfoAppService = async () => {
  
	const {data} = await axios.get(`${baseUrl}/api/info`,{headers, withCredentials: true})
  return data
}

export {getInfoAppService}
