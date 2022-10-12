import React from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'
import './ChatMessages.css'

const ChatMessages = ({messages, compressionRatio}) => {

    return (
        <div className='messages'>
        <h2 className='message-title'>Mensajes <span className='compressed'><span className='percentage'>{Math.round(compressionRatio,2)}%</span>compressed</span></h2>
        <div className='chat-messages'>
            {
                messages.length > 0 
                ?
                messages.map((message,index) => <ChatMessage key={`${message.author.userEmail}-${index}`} message={message}/>)
                :
                'no hay mensajes' 
            }
        </div>
        </div>
    )
}

export default ChatMessages