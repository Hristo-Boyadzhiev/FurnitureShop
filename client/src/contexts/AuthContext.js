import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStore";
import { login, register, logout } from "../services/authService";

const AuthContext = createContext()

export default function AuthProvider({
    children
}){
    const key = 'auth'
    const [auth, setAuth] = useLocalStorage(key, {})
    const navigate = useNavigate()

    const onLoginSubmit = async (formValues) => {
        try {
            const loggedUser = await login(formValues)
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
            const registeredUser = await register(formValues)
            setAuth(registeredUser)
            navigate('/')
        } catch (error) {
            alert(error.message)
        }
    }

    const onLogout = async () => {
        try {
           await logout()
            setAuth(null)
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