import * as api from './api.js'

let endpoints = {
    createPurchase: '/data/purchases',
    getAllUsersPurchases: '/data/purchases',
    getUserPurchases: userId => getUserPurchasesEndpoint(userId),
    deletePurchase: purchaseId => `/data/purchases/${purchaseId}`,
    editPurchase: purchaseId => `/data/purchases/${purchaseId}`
}

export function createPurchase(userId, userEmail, furniture) {
    const data = {
        furniture,
        quantity: 1,
        userId,
        userEmail
    }
    return api.post(endpoints.createPurchase, data)
}

export function getAllUsersPurchases(){
    return api.get(endpoints.getAllUsersPurchases)
}

export function getUserPurchases(userId) {
    return api.get(endpoints.getUserPurchases(userId))
}

function getUserPurchasesEndpoint(userId){
    const searchQuery = encodeURIComponent(`userId="${userId}"`)
    return `/data/purchases?where=${searchQuery}`
}

export function deletePurchase(purchaseId) {
    return api.delete(endpoints.deletePurchase(purchaseId))
}

export function editPurchase(purchaseId, data) {
    return api.put(endpoints.editPurchase(purchaseId), data)
}


