import * as api from './api.js'

let endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export async function login(formValues) {
    const user = await api.post(endpoints.login, formValues)
    return user
}

export async function register(formValues) {
    const user = await api.post(endpoints.register, formValues)
    return user
}

export async function logout() {
   return await api.get(endpoints.logout)
}