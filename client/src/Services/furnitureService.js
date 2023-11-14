const baseUrl = 'http://localhost:3030/jsonstore/furnitures'

export async function createFurniture(data){
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const result = await response.json()
    return result
}

export async function getFurnitures(){
    try {
      const response = await fetch(baseUrl)

    const result = await response.json()
    return Object.values(result)  
    } catch (error) {
        return []
    }
}

export async function getFurniture(furnitureId){
    const response = await fetch(`${baseUrl}/${furnitureId}`)
    const result = await response.json()
    return result
}