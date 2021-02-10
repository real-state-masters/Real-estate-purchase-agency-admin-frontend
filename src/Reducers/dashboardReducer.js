const initialValue = {
  properties: [],
  showFilters: false,
  showEdit: false
}

const dashboardReducer = (state = initialValue, action) => {
    
    switch (action.type) {
        case 'ADD_PROPERTIES': { 
            console.log(state)
            console.log(action)
            console.log(action.payload)
            return {...state, properties: [...action.payload.properties]}}
        case 'ADD_FILTERS':
            return {...state, showFilters: action.payload }
        case 'ADD_EDIT_CARD':
            return {...state, showEdit: action.payload }
        case 'GET_ALL_PROPERTIES': { 
            console.log(state)
            console.log(action)
            console.log(action.payload)
            return {...state, properties: [...action.payload.properties]}}
        default:
            return state
    }
}

export default dashboardReducer