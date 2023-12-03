import * as api from './api.js'

let endpoints = {
    createFurniture: '/data/furnitures',
    getFurnitures: '/data/furnitures',
    getFurniture: furnitureId => `/data/furnitures/${furnitureId}`,
    deleteFurniture: furnitureId => `/data/furnitures/${furnitureId}`,
    editFurniture: furnitureId => `/data/furnitures/${furnitureId}`,
}

export function createFurniture(data) {
    return api.post(endpoints.createFurniture, data)
}

export function getFurnitures() {
    return api.get(endpoints.getFurnitures)
}

export function getFurniture(furnitureId) {
    return api.get(endpoints.getFurniture(furnitureId))
}

export function deleteFurniture(furnitureId) {
    return api.delete(endpoints.deleteFurniture(furnitureId))
}

export function editFurniture(furnitureId, data) {
    return api.put(endpoints.editFurniture(furnitureId), data)
}
