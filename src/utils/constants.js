export const URI = 'https://real-state-admin.herokuapp.com/api/properties'
export const URI_MAPBOX = 'https://api.mapbox.com/geocoding/v5/mapbox.places'
export const TOKEN_MAPBOX = 'pk.eyJ1Ijoic2tlYmFyZCIsImEiOiJja2s5MHRraXMwZDkzMnZxOGg2Ynhxb3VjIn0.3lkI5cTzQf1kUjq9fbmMNQ'

export function getToken() {
    return localStorage.getItem('token')
}

export function uriMapbox(address) {
    return `${URI_MAPBOX}/${address}.json?access_token=${TOKEN_MAPBOX}`
}

export function concatAddress(address) {
    return `${address.street} ${address.number}, ${address.city}, ${address.state}, ${address.country} `;
}