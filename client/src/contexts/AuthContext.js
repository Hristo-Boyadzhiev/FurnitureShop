import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from '../services/authService'

const AuthContext = createContext()

export default function AuthProvider({
    children
}){
    const [auth, setAuth] = useState({})
    const navigate = useNavigate()

    const onLoginSubmit = async (formValues) => {
        try {
            const loggedUser = await authService.login(formValues)
            setAuth(loggedUser)
            navigate('/')
        } catch (error) {
            alert(error.message)
        }
    }

    const onRegisterSubmit = async (formValues) => {
        const { repeatPassword, ...registerData } = formValues

        if (repeatPassword !== registerData.password) {
            return alert('The password and repeat password must be equal')
        }

        try {
            const registeredUser = await authService.register(formValues)
            setAuth(registeredUser)
            navigate('/')
        } catch (error) {
            alert(error.message)
        }
    }

    const onLogout = async () => {
        try {
            await authService.logout(authContextValues.userToken)
            setAuth({})
        } catch (error) {
            alert(error.message)
        }
    }

    const authContextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        email: auth.email,
        token: auth.accessToken,
        isAuthenticated: !!auth.accessToken
    }

    return (
        <AuthContext.Provider value={authContextValues}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context
}