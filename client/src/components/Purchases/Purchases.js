import styles from './Purchases.module.css'
import { getAllUsersPurchases } from '../../services/purchaseService'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import PurchasesItem from './PurchasesItem/PurchasesItem'

export default function Purchases() {
    const { setAuthOnError403 } = useAuthContext()
    const [allPurchases, setAllPurchases] = useState([])

    useEffect(() => {
        getAllUsersPurchases()
            .then(purchases => {
                setAllPurchases(purchases)
            })
            .catch(error => {
                if (error.message === 'Invalid access token') {
                    setAuthOnError403()
                } else {
                    alert(error.message)
                }
            })
    }, [setAuthOnError403])

    const allPurchasesList = allPurchases?.map(x => <PurchasesItem
        key={x._id}
        purchase={x}
        furniture={x.furniture}
    />)

    return (
        <>
            <h1 className={styles["title"]}>All Purchases</h1>

            <table id={styles["customers"]}>
                <tbody>
                    <tr>
                        <th>Model</th>
                        <th>Price</th>
                        <th>User Email</th>
                    </tr>
                    {allPurchasesList}
                </tbody>
            </table>
        </>
    )
}