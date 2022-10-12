import React, {useEffect, useState} from 'react'
import ChatForm from '../../components/ChatForm/ChatForm'
import ChatMessages from '../../components/ChatMessages/ChatMessages'
import { createMessage, getMessages } from '../../services/chatService'
import './Chat.css'
import { desnormalizarMensajes } from '../../helpers/normalize';

const Chat = ({socket}) => {

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [chat, setChat] = useState()
  const [compressionRatio, setCompressionRatio] = useState()
  
  useEffect(() => {

    const getMensajes = async () =>{ 
      const mensajes = await getMessages()

      const finalMessages = await desnormalizarMensajes(mensajes)
      setChat(finalMessages)
    }

    getMensajes()
    
  }, [])

  useEffect(() => {
    socket.on('connection', () => {
      setIsConnected(true);
      console.log("me conecte")
    });

    socket.on('disconnected', () => {
      setIsConnected(false);
    });

    socket.on('server:messages', async (messages) => {
      const finalMessages = await desnormalizarMensajes(messages) 
      const originalSize = JSON.stringify(messages).length
      const newSize = JSON.stringify(finalMessages).length

      console.log("desde socket", finalMessages)
      setChat(finalMessages)
      setCompressionRatio((1 - (newSize / originalSize)) * 100)
    });

  }, [socket]);

  // Handlers
  const submitHandler = async (data) => {

    const finalData = {
      author:{
        userEmail: data.usermail,
        name: data.name,
        lastName: data.lastname,
        age: data.age,
        alias: data.alias,
        avatar: data.avatar,
      },
      message: data.message
    }

    const newMessage = await createMessage(finalData)

    //setChat(chat => [...chat, newMessage])
    
  }

  return (
    <div className='chat'>
      <ChatForm submitHandler={submitHandler}/>
      {chat && <ChatMessages messages={chat} compressionRatio={compressionRatio} />}
    </div>
  )
}

export default Chat