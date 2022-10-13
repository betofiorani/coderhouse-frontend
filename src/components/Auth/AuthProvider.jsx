import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true) // por si queremos hacer un spinner mientras chequea la autenticacion

    const navigate = useNavigate()

    useEffect(() => {
      
    }, [])
    

    const contextValue = {
      loading,
      user,
      async login (userAutenticated) {
          setUser({
            userName: userAutenticated
            })
      },
      logout () {
        setUser({})
      },
      isLogged () {
        return !!user 
      }
    }

    return ( 
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider