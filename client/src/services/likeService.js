import * as api from './api.js'

let endpoints = {
    createLike: '/data/likes',
    getAllLikes: furnitureId => getAllLikesEndpoint(furnitureId),
}

export function createLike(furnitureId, isLiked) {
    const data = {
        isLiked,
        furnitureId
    }
    return api.post(endpoints.createLike, data)
}

export function getAllLikes(furnitureId) {
    return api.get(endpoints.getAllLikes(furnitureId))
}

function getAllLikesEndpoint(furnitureId) {
    const searchQuery = encodeURIComponent(`furnitureId="${furnitureId}"`)
    return `/data/likes?where=${searchQuery}`

}

