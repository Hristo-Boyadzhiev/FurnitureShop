import styles from './BasketItem.module.css'
import { useForm } from '../../../hooks/useForm'
// import { useEffect } from 'react'
import { usePurchaseContext } from '../../../contexts/PurchaseContext'

export default function BasketItem({
    furniture,
    purchase,
    // calculatePrices
}) {
    const {onDeleteClick} = usePurchaseContext()
    const { formValues, onChangeHandler } = useForm({
        quantity: 1
    })

    // useEffect(()=>{
    //     calculatePrices(furniture._id, formValues.quantity)
    // }, [formValues.quantity])

  


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
                    {/* <p><strong>Navy, Size 18</strong></p>
                    <p>Product Code - 232321939</p> */}
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
                <button onClick={()=>onDeleteClick(purchase)}>Remove</button>
            </div>
        </div>
    )
}
