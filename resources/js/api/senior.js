import http from '../libs/http'
const basicRoute = '/api/senior'
export const getSeniorList = (params) => {
    return http.get(basicRoute, {
        params
    })
}

export const getSenior = (id) => {
    return http.get(`${basicRoute}/${id}`)
}

export const addSenior = (data) => {
    return http.post(basicRoute, data)
}

export const editSenior = (id, data) => {
    return http.patch(`${basicRoute}/${id}`, data)
}

export const deleteSenior = id => {
    return http.delete(`${basicRoute}/${id}`)
}
