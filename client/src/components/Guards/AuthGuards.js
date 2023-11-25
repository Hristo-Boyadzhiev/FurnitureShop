import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function AuthGuards({
    children
}){
    const {isAuthenticated} = useAuthContext()

    if(!isAuthenticated){
        return <Navigate to={'/login'} />
    }

    return children ? children : <Outlet />
}