import React, {useContext} from 'react'
import { AuthContext } from '../components/Auth/AuthProvider'

export default function useAuth() {

    return useContext(AuthContext)
    
}