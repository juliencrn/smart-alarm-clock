import { createStore, combineReducers } from 'redux'

import alarm from './reducers/alarmReducer'
import home from './reducers/homeReducer'

export default createStore(combineReducers({
  alarm,
  home,
}))
