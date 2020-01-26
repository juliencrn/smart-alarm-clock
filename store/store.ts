import { createStore, combineReducers } from 'redux'

import alarm from './alarm/reducer'
import home from './home/reducer'

export default createStore(combineReducers({
  alarm,
  home,
}))
