import { usePurchaseContext } from '../../contexts/PurchaseContext'
import styles from './Basket.module.css'
import BasketItem from './BasketItem/BasketItem'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'


export default function Basket() {
    const navigate = useNavigate()
    const { userPurchases, onConfirmClick, getUserPurchasesFunction } = usePurchaseContext()
    const { isAdmin, userId } = useAuthContext()

    useEffect(() => {
        if (isAdmin) {
            return navigate('/')
        }
        getUserPurchasesFunction(userId)

    }, [isAdmin, navigate, userId])

    const arrayOfProductsPrices = userPurchases.map(purchase => purchase.quantity * Number(purchase.furniture.price))
    const subTotal = arrayOfProductsPrices.reduce((sum, currentProductPrice) => sum + currentProductPrice, 0)

    const deliveryCost = subTotal >= 100 ? 0 : 10

    const basketList = userPurchases?.map(x => <BasketItem
        key={x._id}
        purchase={x}
        furniture={x.furniture}
    />)

    return (
        <>

            {basketList.length === 0 &&
                <>
                    <div className={styles["no-context"]}>
                        <p className={styles["no-context-text"]}>The basket is empty</p>
                        <Link to={"/catalog"} className={`${styles["button"]} ${styles["button1"]}`}>Catalog</Link>
                    </div>
                </>}
            {basketList.length > 0 &&
                <>
                    <div className={styles["basket"]}>

                        {basketList}

                    </div>
                    <aside>
                        <div className={styles["summary"]}>
                            <div className={styles["summary-total-items"]}><span className={styles["total-items"]}></span> Items in your Bag</div>
                            <div className={styles["summary-subtotal"]}>
                                <div className={styles["subtotal-title"]}>Subtotal</div>
                                <div className={`${styles["subtotal-value"]} ${styles["final-value"]}`} id={styles["basket-subtotal"]}>{subTotal}</div>
                            </div>
                            <div className={styles["summary-subtotal"]}>
                                <div className={styles["subtotal-title"]}>Delivery</div>
                                <div className={`${styles["subtotal-value"]} ${styles["final-value"]}`} id={styles["basket-subtotal"]}>{deliveryCost}</div>
                            </div>
                            <div className={styles["summary-delivery"]}>
                              
                            </div>
                            <div className={styles["summary-total"]}>
                                <div className={styles["total-title"]}>Total</div>
                                <div className={`${styles["total-value"]} ${styles["final-value"]}`} id={styles["basket-total"]}>{subTotal + deliveryCost}</div>
                            </div>
                            <div className={styles["summary-checkout"]}>
                                <Link to={"/completed-order"} className={`${styles["checkout-cta"]} ${styles["button"]} ${styles["button1"]}`} onClick={onConfirmClick}>CONFIRM ORDER</Link>
                            </div>
                        </div>
                    </aside>
                </>
            }
        </>

    )
}