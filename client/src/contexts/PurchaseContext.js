import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import { createPurchase, getUserPurchases, deletePurchase } from "../services/purchaseService";

const PurchaseContext = createContext()

export default function PurchaseProvider({
    children
}) {
    const [userPurchases, setUserPurchases] = useState([])
    const { userId, email, setAuthOnError403 } = useAuthContext()

    useEffect(() => {
        getUserPurchases(userId)
            .then(currentPurchases => {
                setUserPurchases(currentPurchases)
            })
            .catch(error => {
                if (error.message === 'Invalid access token') {
                    setAuthOnError403()
                } else {
                    alert(error.message)
                }
            })
    }, [userId, setAuthOnError403])

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

    const onDeleteUserClick = async (purchase) => {
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

    const onConfirmClick = async () => {
        userPurchases.forEach(purchase => {
            deletePurchase(purchase._id)
                .catch(error => {
                    if (error.message === 'Invalid access token') {
                        setAuthOnError403()
                    } else {
                        alert(error.message)
                    }
                })
        });

        setUserPurchases([])
    }


    const PurchasesContextValues = {
        userPurchases,
        onBuyClick,
        onDeleteUserClick,
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