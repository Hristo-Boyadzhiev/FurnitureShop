import { Link } from 'react-router-dom'

import { useAuthContext } from '../../contexts/AuthContext'

import styles from './Header.module.css'

export default function Header() {
    const { isAuthenticated, isAdmin } = useAuthContext()

    return (
        <nav id={styles["nav-1"]}>
            <Link className={styles["link-1"]} to={"/"}>Home</Link>
            <Link className={styles["link-1"]} to={"/catalog"}>Catalog</Link>

            {!isAuthenticated &&
                <>
                    <Link className={styles["link-1"]} to={"/login"}>Login</Link>
                    <Link className={styles["link-1"]} to={"/register"}>Register</Link>
                </>}

            {isAuthenticated && !isAdmin &&
                <>
                    <Link className={styles["link-1"]} to={"/contacts"}>Contact us</Link>
                    <Link className={styles["link-1"]} to={"/basket"}>Basket</Link>
                </>}

            {isAuthenticated &&
                <Link className={styles["link-1"]} to={"/logout"}>Logout</Link>
            }

            {isAdmin &&
                <>
                    <Link className={styles["link-1"]} to={"/create"}>Create</Link>
                    <Link className={styles["link-1"]} to={"/messages"}>Messages</Link>
                    <Link className={styles["link-1"]} to={"/purchases"}>Purchases</Link>
                </>
            }
        </nav>
    )
}

