import http from '../libs/http'

export const info = () => {
    return http.get('/api/dashboard')
}
