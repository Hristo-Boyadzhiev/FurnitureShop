import styles from './ComplatedOrder.module.css'
import { useNavigate } from 'react-router-dom'

export default function ComplatedOrder() {
    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/catalog')
    }, 2000);
    return (
<>
<span className={styles["completed-text"]}> YOUR PURCHASE IS COMPLETED!</span>
</>   
    )
}