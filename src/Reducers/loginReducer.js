const initialValue = {
    connected: "false"
}

const loginReducer = (state = initialValue, action) => {
    console.log(state)
    console.log(action)
    console.log(action.payload)

    switch (action.type) {
        case 'ADD_LOGIN_STATUS': 
            return {...state, connected: action.payload }
        case 'CHANGE_LOGIN_STATUS':
            return {...state, connected: action.payload }
        default:
            return state
    }

}

export default loginReducer

