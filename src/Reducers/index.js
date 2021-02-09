import { combineReducers } from 'redux'
import dashboardReducer from './dashboardReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  login: loginReducer
})

export default rootReducer