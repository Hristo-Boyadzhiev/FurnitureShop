const baseUrl = 'http://localhost:3030/users'

export async function login(loginData) {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })

    const result = await response.json()

    if (!response.ok) {
        throw result
    }

    return result
}