import styles from './Purchases.module.css'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import PurchasesItem from './PurchasesItem/PurchasesItem'
import { Link } from 'react-router-dom'
import { getCompletedPurchases } from '../../services/completedPurchaseService'

export default function Purchases() {
    const { setAuthOnError403 } = useAuthContext()
    const [completedPurchases, setCompletedPurchases] = useState([])

    useEffect(() => {
        getCompletedPurchases()
            .then(CurrentCompletedPurchases => {
                setCompletedPurchases(CurrentCompletedPurchases)
            })
            .catch(error => {
                if (error.message === 'Invalid access token') {
                    setAuthOnError403()
                } else {
                    alert(error.message)
                }
            })
    }, [setAuthOnError403])

        const allPurchasesList = completedPurchases?.map(x => <PurchasesItem
        key={x._id}
        purchase={x}
        furniture={x.furniture}
    />)

    return (
        <>
            {allPurchasesList.length === 0 &&
                <div className={styles["no-context"]}>
                    <p className={styles["no-context-text"]}>No purchases yet</p>
                    <Link to={"/"} className={`${styles["button"]} ${styles["button1"]}`}>Home</Link>
                </div>
            }

            {allPurchasesList.length > 0 &&
                <>
                    <h1 className={styles["title"]}>All Purchases</h1>

                    <table id={styles["customers"]}>
                        <tbody>
                            <tr>
                                <th>Model</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Sum</th>
                                <th>User Email</th>
                            </tr>
                            {allPurchasesList}

                        </tbody>
                    </table>
                </>
            }
        </>
    )
}