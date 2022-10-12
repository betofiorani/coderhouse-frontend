import React from 'react'
import './ChatMessage.css'

const ChatMessage = ({message}) => {

    return (
        <div className='message'>
            <span className='avatar-img'><img src={message.author.avatar} alt= {message.author.userEmail}/></span>
            <span>{message.author.alias}</span>
            <span>{message.message}</span>           
        </div>
    )
}

export default ChatMessage