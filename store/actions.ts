import { IAlarm } from '../types'
import {
  ADD_ALARM, DELETE_ALARM, EDIT_ALARM, TOGGLE_HOME_EDIT, TOGGLE_ALARM_ACTIVATION,
} from './constants'

export const addAlarm = (alarm: IAlarm) => ({
  type: ADD_ALARM,
  alarm,
})

export const editAlarm = (alarm: IAlarm) => ({
  type: EDIT_ALARM,
  alarm,
})

export const deleteAlarm = (id: string) => ({
  type: DELETE_ALARM,
  id,
})

export const toggleAlarm = (id: string, value: boolean) => ({
  type: TOGGLE_ALARM_ACTIVATION,
  id,
  value,
})

export const toggleHomeEdit = (value: boolean) => ({
  type: TOGGLE_HOME_EDIT,
  value,
})
