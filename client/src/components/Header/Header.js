import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'
import styles from './Header.module.css'

export default function Header() {
    const { isAuthenticated } = useAuthContext()

    return (
        <nav id={styles["nav-1"]}>
            <Link className={styles["link-1"]} to={"/"}>Home</Link>
            <Link className={styles["link-1"]} to={"/catalog"}>Catalog</Link>
            <Link className={styles["link-1"]} to={"/services"}>Services</Link>
            <Link className={styles["link-1"]} to={"/blog"}>Blog</Link>
            <Link className={styles["link-1"]} to={"/about"}>About us</Link>
            <Link className={styles["link-1"]} to={"/contact"}>Contact us</Link>

            {!isAuthenticated && <>
                <Link className={styles["link-1"]} to={"/login"}>Login</Link>
                <Link className={styles["link-1"]} to={"/register"}>Register</Link>
            </>}

            {isAuthenticated && <>
                <Link className={styles["link-1"]} to={"/create"}>Create</Link>
                <Link className={styles["link-1"]} to={"/logout"}>Logout</Link>
                <Link className={styles["link-1"]} to={"/basket"}>Basket</Link>
            </>}
        </nav>
    )
}