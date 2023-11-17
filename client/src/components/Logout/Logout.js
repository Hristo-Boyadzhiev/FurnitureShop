import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const { onLogout } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        onLogout()
        navigate('/')
    }, [onLogout, navigate])
}