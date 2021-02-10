export const URI = 'https://real-state-admin.herokuapp.com/api/properties'

export function getToken() {
    return localStorage.getItem('token')
}