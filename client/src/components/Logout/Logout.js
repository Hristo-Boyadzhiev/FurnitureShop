import { useContext, useEffect } from "react";
import { authContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const { onLogout } = useContext(authContext)
    const navigate = useNavigate()

    useEffect(() => {
        onLogout()
        navigate('/')
    }, [onLogout, navigate])
}