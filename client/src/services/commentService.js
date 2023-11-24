const baseUrl = 'http://localhost:3030/data/comments'

export async function createComment (furnitureId, formValues, token){

    const data = {
        comment: formValues.comment,
        furnitureId
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


export async function getFurnitureComments (furnitureId){
    const searchQuery = encodeURIComponent(`furnitureId="${furnitureId}"`)
    const relationQuery = encodeURIComponent(`author=_ownerId:users`)

    const response = await fetch(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`)
        const result = await response.json()
        return Object.values(result)
    
}