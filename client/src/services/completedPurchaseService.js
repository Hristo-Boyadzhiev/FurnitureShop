import * as api from './api.js'

let endpoints = {
    createCompletedPurchases: '/data/completedPurchases',
    getCompletedPurchases: '/data/completedPurchases',
}

export function createCompletedPurchases(data) {
    return api.post(endpoints.createCompletedPurchases, data)
}

export function getCompletedPurchases() {
    return api.get(endpoints.getCompletedPurchases)
}

