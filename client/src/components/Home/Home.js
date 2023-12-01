import { Link } from "react-router-dom"
import styles from './Home.module.css'

export default function Home() {
    return (
        <header>
        <div className={styles["container"]}>
            <div className={styles["intro-text"]}>
                {/* <div className="intro-lead-in">Hello Errbody</div> */}
                <div className={styles["intro-heading"]}>Welcome to the Troyan Furnitures</div>
                <Link to={"/catalog"} className={`${styles["button"]} ${styles["button1"]}`}>Catalog</Link>             
            </div>
        </div>
    </header>
    )
}