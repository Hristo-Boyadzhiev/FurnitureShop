import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../contexts/authContext'

export default function Header() {
    const { isAuthenticated } = useContext(authContext)


    return (
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

            <div className="container">
                <Link className="navbar-brand" to={"/"}>Furni<span>.</span></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsFurni">
                    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item"> <Link className="nav-link" to={"/"}>Home</Link></li>
                        <li><Link className="nav-link" to={"/catalog"}>Catalog</Link></li>
                        <li><Link className="nav-link" to={"/services"}>Services</Link></li>
                        <li><Link className="nav-link" to={"/blog"}>Blog</Link></li>
                        <li><Link className="nav-link" to={"/about"}>About us</Link></li>
                        <li><Link className="nav-link" to={"/contacts"}>Contact us</Link></li>

                        {!isAuthenticated && <>
                            <li><Link className="nav-link" to={"/login"}>Login</Link></li>
                            <li><Link className="nav-link" to={"/register"}>Register</Link></li>
                        </>}

                        {isAuthenticated && <>
                            <li><Link className="nav-link" to={"/create"}>Create</Link></li>
                            <li><Link className="nav-link" to={"/contacts"}>Logout</Link></li>
                        </>}
                    </ul>

                    <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                        {/* <li><Link className="nav-link" to={"/dada"}><img src="images/user.svg" alt='' /></Link></li> */}
                        <li><Link className="nav-link" to={"cart.html"}><img src="images/cart.svg" alt='' /></Link></li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}