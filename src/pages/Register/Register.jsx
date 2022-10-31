import React from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import Box from '@mui/material/Box';

const Register = () => {
  return (
    <Box
      sx={{
        margin: '0 auto',
        width: 600,
        marginTop: '20px',
        padding: '10px 30px',
        backgroundColor: 'primary.dark',
        textAlign: 'center',
        h1: {
            color: 'white'
        }
      }}
    >
        <h1>Register Page</h1>
        <RegisterForm />
    </Box>
  )
}

export default Register
