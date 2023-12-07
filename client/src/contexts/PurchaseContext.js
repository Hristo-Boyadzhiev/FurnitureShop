import { createContext, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { createPurchase, getUserPurchases, deletePurchase } from "../services/purchaseService";
import { createCompletedPurchases } from "../services/completedPurchaseService";

const PurchaseContext = createContext()

export default function PurchaseProvider({
    children
}) {
    const [userPurchases, setUserPurchases] = useState([])
    const { userId, email, setAuthOnError403 } = useAuthContext()

    const getUserPurchasesFunction = async (userId) => {
        try {
            const currentUserPurchases = await getUserPurchases(userId)
            setUserPurchases(currentUserPurchases)
        } catch (error) {
            if (error.message === 'Invalid access token') {
                setAuthOnError403()
            } else {
                alert(error.message)
            }
        }
    }

    const onBuyClick = async (furniture) => {
        try {
            const newPurchase = await createPurchase(userId, email, furniture)
            setUserPurchases(state => [...state, newPurchase])
        } catch (error) {
            if (error.message === 'Invalid access token') {
                setAuthOnError403()
            } else {
                alert(error.message)
            }
        }
    }

    const onDeletePurchaseClick = async (purchase) => {
        const confirm = window.confirm(`Are you sure you want to delete ${purchase.furniture.model}?`);
        if (confirm) {
            try {
                await deletePurchase(purchase._id)
                setUserPurchases(state => state.filter(x => x._id !== purchase._id))
            } catch (error) {
                if (error.message === 'Invalid access token') {
                    setAuthOnError403()
                } else {
                    alert(error.message)
                }
            }
        }
    }

    const onConfirmClick = () => {
        userPurchases.forEach(purchase => {
            deletePurchase(purchase._id)
                .catch(error => {
                    if (error.message === 'Invalid access token') {
                        setAuthOnError403()
                    } else {
                        alert(error.message)
                    }
                })
                createCompletedPurchases(purchase)    
        });
        setUserPurchases([])
    }

    const editPurchasesInState = (editedPurchase) =>{         
        setUserPurchases(state=> state.map(x => x._id === editedPurchase._id ? editedPurchase : x))
    }

    const PurchasesContextValues = {
        userPurchases,
        getUserPurchasesFunction,
        onBuyClick,
        onDeletePurchaseClick,
        editPurchasesInState,
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