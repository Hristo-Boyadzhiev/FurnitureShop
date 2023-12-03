import * as api from './api.js'

let endpoints = {
    createPurchase: '/data/purchases',
    getPurchases: userId => getPurchasesEndpoint(userId),
    deletePurchase: purchaseId => `/data/purchases/${purchaseId}`
}

export function createPurchase(userId, furniture) {
    const data = {
        furniture,
        userId
    }
    return api.post(endpoints.createPurchase, data)
}

export function getPurchases(userId) {
    return api.get(endpoints.getPurchases(userId))
}

function getPurchasesEndpoint(userId){
    const searchQuery = encodeURIComponent(`userId="${userId}"`)
    return `/data/purchases?where=${searchQuery}`
}

export function deletePurchase(purchaseId) {
    return api.delete(endpoints.deletePurchase(purchaseId))
}


