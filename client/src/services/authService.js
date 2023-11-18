const baseUrl = 'http://localhost:3030/users'

export async function login(loginData) {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })

    if (response.status === 204) {
        return {}
    }

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

    if (response.status === 204) {
        return {}
    }

    const result = await response.json()

    if (!response.ok) {
        throw result
    }

    return result
}

export async function logout(userToken){
    await fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': userToken
        }
    })
}