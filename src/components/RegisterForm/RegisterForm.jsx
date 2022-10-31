import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import './RegisterForm.css'
import { register } from '../../services/loginService'
import Swal from 'sweetalert2'
import useAuth from '../../hooks/useAuth'

const RegisterForm = () => {
    const navigate = useNavigate()
    const auth = useAuth()

    const [user, setUser] = useState()

    const submitHandler = async (userData) => {
        const response = await register(userData)
        if(response.status === "OK"){
            Swal.fire({
                icon: 'success', 
                title: `<p>User created Successfully</p>`,
                text: `welcome ${userData.firstName}`,
            }).then(async (res) => {
                navigate('/login')
            })
        }
        else {
            Swal.fire({
                icon: 'error', 
                title: `<p>Ooops....</p>`,
                text: `something fail`,
            })
        }
    }

    return (
        <div>
            <TextField 
                className='login-form'
                variant="filled"
                required
                fullWidth
                label="Nombre"
                placeholder='ingrese su nombre'
                onChange={(e) => setUser({...user, firstName: e.target.value})} 
            />
            <TextField 
                className='login-form m-top-20'
                variant="filled"
                required
                fullWidth
                label="Apellido"
                placeholder='ingrese su Apellido'
                onChange={(e) => setUser({...user, lastName: e.target.value})} 
            />
            <TextField 
                className='login-form m-top-20'
                variant="filled"
                required
                fullWidth
                label="Email"
                placeholder='ingrese su Email'
                onChange={(e) => setUser({...user, email: e.target.value})} 
            />
            <TextField 
                className='login-form m-top-20'
                variant="filled"
                required
                fullWidth
                label="Usuario"
                placeholder='ingrese su nombre de usuario'
                onChange={(e) => setUser({...user, username: e.target.value})} 
            />
            <TextField 
                className='login-form m-top-20'
                variant="filled"
                type="password"
                required
                fullWidth
                label="Contraseña"
                placeholder='ingrese su contraseña'
                onChange={(e) => setUser({...user, password:e.target.value})} 
            />
            <div className='login-buttons'>
                <Button 
                    variant="contained"
                    onClick={() => submitHandler(user)}
                >
                    Crear Cuenta
                </Button>
                <Link className='register' to="/login">ya tengo cuenta</Link>
            </div>
        </div>
    )
}

export default RegisterForm