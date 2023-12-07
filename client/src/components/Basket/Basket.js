// import { useEffect, useState } from 'react'
import { usePurchaseContext } from '../../contexts/PurchaseContext'
import styles from './Basket.module.css'
import BasketItem from './BasketItem/BasketItem'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'

export default function Basket() {
    const navigate = useNavigate()
    const { userPurchases, onConfirmClick, getUserPurchasesFunction } = usePurchaseContext()
    const [subTotal, setSubTotal] = useState(0)
    const [currentQuantity, setCurrentQuantity] = useState(1)
    const { isAdmin, userId } = useAuthContext()

    useEffect(() => {
        if (isAdmin) {
            return navigate('/')
        }

        getUserPurchasesFunction(userId)
    }, [isAdmin, navigate, userId])

    const calculatePrices = (furnitureId, quantity) => {
        console.log(quantity)
        const furnitureWithChangedQuantity = userPurchases.find(x => x.furniture._id === furnitureId)
        if (quantity >= currentQuantity) {
            setSubTotal(state => state + Number(furnitureWithChangedQuantity.furniture.price))
        } else {
            setSubTotal(state => state - Number(furnitureWithChangedQuantity.furniture.price))
        }
        setCurrentQuantity(quantity)
    }

    const deliveryCost = subTotal >= 100 ? 0 : 10

    const basketList = userPurchases?.map(x => <BasketItem
        key={x._id}
        purchase={x}
        furniture={x.furniture}
        calculatePrices={calculatePrices}
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
                        {/* <div className={styles["basket-module"]}>
                    <label for="promo-code">Enter a promotional code</label>
                    <input id={styles["promo-code"]} type="text" name="promo-code" maxlength="5" className={styles["promo-code-field"]} />
                    <button className={styles["promo-code-cta"]}>Apply</button>
                </div> */}
                        {/* <div className={styles["basket-labels"]}>
                    <ul>
                        <li className={`${styles["item"]} ${styles["item-heading"]}`}>Item</li>
                        <li className={styles["price"]}>Price</li>
                        <li className={styles["quantity"]}>Quantity</li>
                        <li className={styles["subtotal"]}>Subtotal</li>
                    </ul>
                </div>  */}


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
                                {/* <select name="delivery-collection" className={styles["summary-delivery-selection"]}>
                            <option value="0" selected="selected">Select Collection or Delivery</option>
                            <option value="collection">Collection</option>
                            <option value="first-className">Royal Mail 1st ClassName</option>
                            <option value="second-className">Royal Mail 2nd ClassName</option>
                            <option value="signed-for">Royal Mail Special Delivery</option>
                        </select> */}

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