let host = 'http://localhost:3030'

async function request(method, url, data) {

    let options = {
        method,
        headers: {}
    }

    if (data !== undefined) {
        options.body = JSON.stringify(data)
        options.headers['Content-Type'] = 'application/json'
    }

    const serializedAuth = localStorage.getItem('auth');

    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth);

        if (auth.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': auth.accessToken,
            }
        }
    }

    try {
        let response = await fetch(host + url, options)

        if (response.ok !== true) {

            if (response.status === 404) {
                return []
            }

            let error = await response.json()
            throw new Error(error.message)
        } else {
            if (response.status === 204) {
                return response
            } else {
                return response.json()
            }
        }
    } catch (error) {
        throw error
    }
}

let get = request.bind(null, 'get')
let post = request.bind(null, 'post')
let put = request.bind(null, 'put')
let del = request.bind(null, 'delete')

export {
    get,
    post,
    put,
    del as delete
}