import { Button, TextField } from '@mui/material'
import React, {useState} from 'react'
import './ChatForm.css'

const ChatForm = ({submitHandler}) => {

  const [values, setValues] = useState({usermail: "", name:"", lastname:"", alias:"", age:"", avatar:"", message:"" })

  return (
    <div className='new-message'>
      <h2>Nuevo Mensaje</h2>
      <div className='chat-form'>
        <TextField 
            name="usermail"
            required
            label="userMail"
            type="text"
            value={values.usermail}
            onChange={(e) => setValues({...values, usermail: e.target.value})}
        />
        <div className='chat-form-item'>
            <TextField 
                name="name"
                required
                label="name"
                type="text"
                value={values.name}
                onChange={(e) => setValues({...values, name: e.target.value})}
            />
            <TextField 
                name="lastname"
                label="lastName"
                type="text"
                required
                value={values.lastname}
                onChange={(e) => setValues({...values, lastname: e.target.value})}
            />
        </div>
        <div className='chat-form-item'>
            <TextField 
                name="alias"
                required
                label="alias"
                type="text"
                value={values.alias}
                onChange={(e) => setValues({...values, alias: e.target.value})}
            />
            <TextField 
                name="age"
                required
                label="age"
                type="text"
                value={values.age}
                onChange={(e) => setValues({...values, age: e.target.value})}
            />
        </div>
        <TextField 
            name="avatar"
            label="url avatar"
            required
            type="text"
            value={values.avatar}
            onChange={(e) => setValues({...values, avatar: e.target.value})}
        />
        <TextField 
            name="message"
            required
            multiline
            label="message"
            type="text"
            value={values.message}
            onChange={(e) => setValues({...values, message: e.target.value})}
        />
        <div className='btn-container'>
            <Button variant="contained" onClick={() => {
                    submitHandler(values)
                    setValues({...values, message: ""})
                } 
            }>
                SEND MESSAGE 
            </Button>
        </div>
      </div>
    </div>
  )
}

export default ChatForm