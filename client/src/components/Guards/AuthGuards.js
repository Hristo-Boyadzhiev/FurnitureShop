import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

//трябва да измисля owner guards - логнат потребител да не може да влиза в edit, delete?

export default function AuthGuards({
    children
}){
    const {isAuthenticated} = useAuthContext()

    if(!isAuthenticated){
        return <Navigate to={'/login'} />
    }

    return children ? children : <Outlet />
}