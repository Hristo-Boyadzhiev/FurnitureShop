import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { usePurchaseContext } from '../../../contexts/PurchaseContext'
import { useAuthContext } from '../../../contexts/AuthContext'

import { useForm } from '../../../hooks/useForm'

import { editPurchase } from '../../../services/purchaseService'

import styles from './BasketItem.module.css'


export default function BasketItem({
    furniture,
    purchase
}) {
    const { formValues, onChangeHandler } = useForm({
        quantity: 1
    })

    const { editPurchasesInState, onDeletePurchaseClick } = usePurchaseContext()
    const { setAuthOnError403 } = useAuthContext()

    useEffect(() => {
        editPurchase(purchase._id, { ...purchase, quantity: Number(formValues.quantity) })
            .then(editedPurchase => {
                editPurchasesInState(editedPurchase)
            })
            .catch(error=>{
                if (error.message === 'Invalid access token') {
                    setAuthOnError403()
                  } else {
                    alert(error.message)
                  }
            })
    }, [formValues.quantity])

    const totalProduct = Number(formValues.quantity) * furniture.price

    return (
        <div className={styles["basket-product"]}>
            <div className={styles["item"]}>
                <div className={styles["product-image"]}>
                    <img src={furniture.imageUrl} alt={furniture.model} className={styles["product-frame"]} />
                </div>
                <div className={styles["product-details"]}>
                    <h1>
                        <strong>
                            <span className={styles["item-model"]}>{furniture.model}</span>
                        </strong>
                    </h1>
                </div>
            </div>
            <div className={styles["price"]}>{furniture.price}</div>
            <div className={styles["quantity"]}>
                <input
                    type="number"
                    min={1}
                    name="quantity"
                    className={styles["quantity-field"]}
                    value={formValues.quantity}
                    onChange={onChangeHandler}
                />
            </div>
            <div className={styles["subtotal"]}>{totalProduct}</div>
            <div className={styles["remove"]}>
                <Link to={`/catalog/${furniture._id}/details`} className={`${styles["button"]} ${styles["button1"]}`}>Product Details</Link>
                <button onClick={() => onDeletePurchaseClick(purchase, furniture._id, formValues.quantity)} className={`${styles["button"]} ${styles["button1"]}`}>Remove</button>
            </div>
        </div>
    )
}
