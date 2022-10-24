import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import './LoginForm.css'
import { login } from '../../services/loginService'
import Swal from 'sweetalert2'
import useAuth from '../../hooks/useAuth'

const LoginForm = () => {
    const navigate = useNavigate()
    const auth = useAuth()

    const [user, setUser] = useState()

    const submitHandler = async (userData) => {
        const response = await login(userData)
        if(response.status === "OK"){
            auth.login(userData)
            Swal.fire({
                icon: 'success', 
                title: `<p>Login Successfully</p>`,
                text: `welcome ${userData.user}`,
            }).then(async (res) => {
                navigate('/')
            })

        }
        else {
            Swal.fire({
                icon: 'error', 
                title: `<p>Login incorrect</p>`,
                text: `${userData} is a forbidden user`,
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
                label="Usuario"
                placeholder='ingrese su nombre de usuario'
                onChange={(e) => setUser({user: e.target.value})} 
            />
            <TextField 
                className='login-form m-top-20'
                variant="filled"
                type="password"
                required
                fullWidth
                label="Contraseña"
                placeholder='ingrese su contraseña'
                onChange={(e) => setUser({password:e.target.value})} 
            />
            <div className='login-buttons'>
                <Button 
                    variant="contained"
                    onClick={() => submitHandler(user)}
                >
                    Ingresar
                </Button>
            </div>
        </div>
    )
}

export default LoginForm