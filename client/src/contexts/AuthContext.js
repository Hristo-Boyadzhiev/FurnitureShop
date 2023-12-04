import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStore";
import { login, register, logout } from "../services/authService";

const AuthContext = createContext()

export default function AuthProvider({
    children
}) {
    const key = 'auth'
    const [auth, setAuth] = useLocalStorage(key, {})
    const navigate = useNavigate()

    const onLoginSubmit = async (formValues) => {
        try {
            const loggedUser = await login(formValues)
            setAuth(loggedUser)
            navigate('/')
        } catch (error) {
            if (error.message === 'Invalid access token') {
                setAuth(null)
            } else {
                alert(error.message)
            }
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
            if (error.message === 'Invalid access token') {
                setAuth(null)
            } else {
                alert(error.message)
            }
        }
    }

    const onLogout = async () => {
        try {
            await logout()
            setAuth(null)
        } catch (error) {
            if (error.message === 'Invalid access token') {
                setAuth(null)
            } else {
                alert(error.message)
            }
        }
    }

    const setAuthOnError403 = () => {
        setAuth(null)
    }

    const authContextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        setAuthOnError403,
        userId: auth._id,
        email: auth.email,
        token: auth.accessToken,
        isAuthenticated: !!auth.accessToken,
        isAdmin: auth.email === 'hristo@abv.bg'
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

