const baseUrl = 'http://localhost:3030/data/purchases'

export async function createPurchase(userId, furniture, token) {

    const data = {
        furniture,
        userId
    }

    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    })

    const result = response.json()
    return result
}

export async function getPurchases(userId) {
    const searchQuery = encodeURIComponent(`userId="${userId}"`)

    const response = await fetch(`${baseUrl}?where=${searchQuery}`)
  
    if(response.status === 404){
        return []
    }

    const result = await response.json()
    return Object.values(result)
}

export async function deletePurchase(purchaseId, token) {
    const response = await fetch(`${baseUrl}/${purchaseId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        }
    })
    const result = await response.json()
    return result
}
