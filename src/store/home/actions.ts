import { TOGGLE_HOME_EDIT } from '../constants'

// eslint-disable-next-line import/prefer-default-export
export const toggleEdit = (value: boolean) => ({
  type: TOGGLE_HOME_EDIT,
  value,
})
