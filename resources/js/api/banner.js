import http from '../libs/http'
const basicRoute = '/api/banner'
export const getBannerList = (params) => {
    return http.get(basicRoute, {
        params
    })
}

export const getBanner = (id) => {
    return http.get(`${basicRoute}/${id}`)
}

export const addBanner = (data) => {
    return http.post(basicRoute, data)
}

export const editBanner = (id, data) => {
    return http.patch(`${basicRoute}/${id}`, data)
}

export const deleteBanner = id => {
    return http.delete(`${basicRoute}/${id}`)
}
