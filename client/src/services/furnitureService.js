const baseUrl = 'http://localhost:3030/data/furnitures'
console.log(baseUrl)

export async function createFurniture(data, token) {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    })

    const result = await response.json()
    return result
}

export async function getFurnitures() {
    const response = await fetch(baseUrl)
    const result = await response.json()
    return result
}

export async function getFurniture(furnitureId) {
    const response = await fetch(`${baseUrl}/${furnitureId}`)
    const result = await response.json()
    return result
}

export async function deleteFurniture(furnitureId, token) {
    const response = await fetch(`${baseUrl}/${furnitureId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        }
    })
    const result = await response.json()
    return result
}

export async function editurniture(furnitureId, formValues) {
    const response = await fetch(`${baseUrl}/${furnitureId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formValues)
    })
    const result = await response.json()
    return result
}