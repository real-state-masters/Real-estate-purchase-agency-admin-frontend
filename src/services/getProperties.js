export default function getProperties() {
    return fetch('http://localhost:3000/properties')
    .then(res => res.json())
    .then(res => {
        const { properties } = res
        return { properties }
    })
}