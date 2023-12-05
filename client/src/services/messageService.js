import * as api from './api.js'

let endpoints = {
    createMessage: '/data/messages',
    getMessages: '/data/messages'
}

export function createMessage(data) {
    return api.post(endpoints.createMessage, data)
}

export function getMessages() {
    return api.get(endpoints.getMessages)
}
