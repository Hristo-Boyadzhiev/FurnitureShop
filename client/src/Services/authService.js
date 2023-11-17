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

export async function register(registerData) {
 
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(registerData)
    })

    const result = await response.json()

    if (!response.ok) {
        throw result
    }

    return result
}