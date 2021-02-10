export default function getProperties(URI, token) {
    return fetch(URI, {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer ' + token
    }})
    .then(res => res.json())
}


