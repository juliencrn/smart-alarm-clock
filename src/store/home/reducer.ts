import { TOGGLE_HOME_EDIT } from '../constants'

export interface HomeState {
    isEditing: boolean
}

const initialState: HomeState = {
  isEditing: false,
}

export default function reducer(state: HomeState = initialState, action) {
  switch (action.type) {
    case TOGGLE_HOME_EDIT:
      return { ...state, isEditing: action.value }
    default:
      return state
  }
}
