import * as api from './api.js'

let endpoints = {
    createComment: '/data/comments',
    getComments: furnitureId => getCommentsEndpoint(furnitureId),
    deleteComment: commentId => `/data/comments/${commentId}`
}

export function createComment(furnitureId, formValues) {
    const data = {
        comment: formValues.comment,
        furnitureId
    }
    return api.post(endpoints.createComment, data)
}

export function getComments(furnitureId) {
    return api.get(endpoints.getComments(furnitureId))
}

function getCommentsEndpoint (furnitureId){
    const searchQuery = encodeURIComponent(`furnitureId="${furnitureId}"`)
    const relationQuery = encodeURIComponent(`author=_ownerId:users`)
    return `/data/comments?where=${searchQuery}&load=${relationQuery}`
}

export function deleteComment(commentId) {
    return api.delete(endpoints.deleteComment(commentId))
}
