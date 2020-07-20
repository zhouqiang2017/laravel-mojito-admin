import http from '../libs/http'
const basicRoute = '/api/member'
export const getMemberList = (params) => {
    return http.get(basicRoute, {
        params
    })
}
