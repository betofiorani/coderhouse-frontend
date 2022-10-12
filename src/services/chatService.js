import axios from 'axios'

const baseUrl = process.env.REACT_APP_BACKEND_URL;
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, PATCH, POST, DELETE, OPTIONS',
};

const getMessages = async () => {

  const {data} = await axios.get(`${baseUrl}/api/chat`,{headers})
  return data
}

const createMessage = async (messageData) => {
  
  const {data} = await axios.post(`${baseUrl}/api/chat`,messageData,{headers})
  return data
}

export {getMessages, createMessage}