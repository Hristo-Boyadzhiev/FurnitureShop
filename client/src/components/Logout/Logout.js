import { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const { onLogout } = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        onLogout()
        navigate('/')
    }, [onLogout, navigate])
}