import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import { createPurchase, getPurchases, deletePurchase } from "../services/purchaseService";

const PurchaseContext = createContext()

export default function PurchaseProvider({
    children
}) {
    const [purchases, setPurchases] = useState([])
    const { userId } = useAuthContext()

    useEffect(() => {
        getPurchases(userId)
            .then(currentPurchases => {
                setPurchases(currentPurchases)
            })
    }, [userId])

    const onBuyClick = async (furniture) => {
        try {
            const newPurchase = await createPurchase(userId, furniture)
            setPurchases(state => [...state, newPurchase])
        } catch (error) {
            alert(error.message)
        }
    }

    const onDeleteClick = async (purchase) => {
        const confirm = window.confirm(`Are you sure you want to delete ${purchase.furniture.model}?`);
        if (confirm) {
            try {
                await deletePurchase(purchase._id)
                setPurchases(state => state.filter(x => x._id !== purchase._id))
            } catch (error) {
                alert(error.message)
            }
        }
    }

    const onConfirmClick = async () => {
        try {
            purchases.forEach(purchase => {
                deletePurchase(purchase._id)
                .catch(error=>{
                    alert(error.message) 
                })
            });
            setPurchases([])
        } catch (error) {
            alert(error.message)
        }
    }


    const PurchasesContextValues = {
        purchases,
        onBuyClick,
        onDeleteClick,
        onConfirmClick
    }

    return (
        <PurchaseContext.Provider value={PurchasesContextValues}>
            {children}
        </PurchaseContext.Provider>
    )
}

export const usePurchaseContext = () => {
    const context = useContext(PurchaseContext)
    return context
}