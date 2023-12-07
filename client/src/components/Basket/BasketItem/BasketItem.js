import styles from './BasketItem.module.css'
import { useForm } from '../../../hooks/useForm'
import { useEffect } from 'react'
import { editPurchase } from '../../../services/purchaseService'
import { Link } from 'react-router-dom'
import { usePurchaseContext } from '../../../contexts/PurchaseContext'

export default function BasketItem({
    furniture,
    purchase
}) {
    const { formValues, onChangeHandler } = useForm({
        quantity: 1
    })

    const { editPurchasesInState, onDeletePurchaseClick } = usePurchaseContext()

    useEffect(() => {
        editPurchase(purchase._id, { ...purchase, quantity: Number(formValues.quantity) })
            .then(editedPurchase => {
                editPurchasesInState(editedPurchase)
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
