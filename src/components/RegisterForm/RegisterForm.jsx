import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import './RegisterForm.css'
import { register } from '../../services/loginService'
import Swal from 'sweetalert2'
import useAuth from '../../hooks/useAuth'
import { MuiTelInput } from 'mui-tel-input'


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
        else if (response.status === "NO_OK"){
          Swal.fire({
            icon: 'error', 
            title: `<p>Ooops....</p>`,
            text: `user already exist in database`,
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
            <div style={{ display: 'flex', columnGap: '20px' }}>
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
                  className='login-form'
                  variant="filled"
                  required
                  fullWidth
                  label="Apellido"
                  placeholder='ingrese su Apellido'
                  onChange={(e) => setUser({...user, lastName: e.target.value})} 
              />
            </div>
            <div style={{ display: 'flex', columnGap: '20px', marginTop: '20px' }}>
              <TextField 
                  className='login-form'
                  variant="filled"
                  required
                  fullWidth
                  label="Email"
                  placeholder='ingrese su Email'
                  onChange={(e) => setUser({...user, email: e.target.value})} 
              />
              <MuiTelInput
                  className='login-form'
                  value={user && user.celular}
                  splitCallingCode
                  defaultCountry='AR'
                  variant="filled"
                  required
                  fullWidth
                  label="Celular"
                  onChange={ phone => setUser({...user, celular: phone})} 
              />
            </div>
            <div style={{ display: 'flex', columnGap: '20px', marginTop: '20px' }}>
              <TextField 
                  className='login-form'
                  variant="filled"
                  required
                  type="number"
                  fullWidth
                  label="Edad"
                  placeholder='ingrese su Edad'
                  onChange={(e) => setUser({...user, age: e.target.value})} 
              />
              <TextField 
                  className='login-form'
                  variant="filled"
                  required
                  fullWidth
                  label="URL Avatar"
                  placeholder='ingrese la url de su avatar'
                  onChange={(e) => setUser({...user, avatar:e.target.value})} 
              />
            </div>
            <div style={{ display: 'flex', columnGap: '20px', marginTop: '20px' }}>
              <TextField 
                  className='login-form'
                  variant="filled"
                  required
                  fullWidth
                  label="Dirección"
                  placeholder='ingrese su dirección'
                  onChange={(e) => setUser({...user, address: e.target.value})} 
              />
            </div>
            <div style={{ display: 'flex', columnGap: '20px', marginTop: '20px' }}>
              <TextField 
                  className='login-form'
                  variant="filled"
                  required
                  fullWidth
                  label="Usuario"
                  placeholder='ingrese su nombre de usuario'
                  onChange={(e) => setUser({...user, username: e.target.value})} 
              />
              <TextField 
                  className='login-form'
                  variant="filled"
                  type="password"
                  required
                  fullWidth
                  label="Contraseña"
                  placeholder='ingrese su contraseña'
                  onChange={(e) => setUser({...user, password:e.target.value})} 
              />
            </div>
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