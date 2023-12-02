import { createContext, useContext, useState, useEffect } from "react";
import * as purchaseService from '../services/purchaseService'
import { useAuthContext } from "./AuthContext";

const PurchaseContext = createContext()

export default function PurchaseProvider({
    children
}) {
    const [purchases, setPurchases] = useState([])
    const { userId, token } = useAuthContext()

    useEffect(() => {
        purchaseService.getPurchases(userId)
            .then(currentPurchases => {
                setPurchases(currentPurchases)
            })
    }, [userId])

    const onBuyClick = async (furniture) => {
        try {
            const newPurchase = await purchaseService.createPurchase(userId, furniture, token)
            setPurchases(state => [...state, newPurchase])
        } catch (error) {
            alert(error.message)
        }
    }

    const onDeleteClick = async (purchase) => {
        const confirm = window.confirm(`Are you sure you want to delete ${purchase.furniture.model}?`);
        if (confirm) {
            try {
                await purchaseService.deletePurchase(purchase._id, token)
                setPurchases(state => state.filter(x => x._id !== purchase._id))
            } catch (error) {
                alert(error.message)
            }
        }
    }

    const onConfirmClick = async () => {
        try {
            purchases.forEach(purchase => {
                purchaseService.deletePurchase(purchase._id, token)
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