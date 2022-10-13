import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import Box from '@mui/material/Box';

const Login = () => {
  return (
    <Box
      sx={{
        margin: '0 auto',
        width: 400,
        marginTop: '50px',
        padding: '30px',
        backgroundColor: 'primary.dark',
        textAlign: 'center',
        h1: {
            color: 'white'
        }
      }}
    >
        <h1>Login Page</h1>
        <LoginForm />
    </Box>
  )
}

export default Login
