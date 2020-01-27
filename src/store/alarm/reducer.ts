import moment from 'moment'
import { IAlarm } from '../../types'
import {
  ADD_ALARM, EDIT_ALARM, DELETE_ALARM, TOGGLE_ALARM_ACTIVATION,
} from '../constants'

export interface AlarmState {
    alarms: IAlarm[]
}

const initialState: AlarmState = {
  alarms: [
    {
      id: 'abc123',
      name: 'Alarm 1',
      clock: moment('2013-02-08 09:30').toDate(),
      days: ['1', '2', '3', '4', '5'],
      activated: true,
    },
    {
      id: 'abc125',
      name: '#420',
      clock: moment({ hour: 4, minute: 20 }).toDate(),
      days: ['5'],
      activated: false,
    },
    {
      id: 'abc126',
      name: 'Running',
      clock: moment({ hour: 16, minute: 20 }).toDate(),
      days: ['1', '4'],
      activated: false,
    },
  ],
}

export default function reducer(state: AlarmState = initialState, action) {
  switch (action.type) {
    case ADD_ALARM:
      return { ...state, alarms: [...state.alarms, action.alarm] }
    case EDIT_ALARM:
      return {
        ...state,
        alarms: state.alarms.map((alarm) => (alarm.id === action.alarm.id
          ? action.alarm
          : alarm)),
      }
    case DELETE_ALARM:
      return {
        ...state,
        alarms: state.alarms.filter((alarm) => alarm.id !== action.id),
      }
    case TOGGLE_ALARM_ACTIVATION:
      return {
        ...state,
        alarms: state.alarms.map((alarm) => {
          if (alarm.id === action.id) {
            return { ...alarm, activated: action.value }
          }
          return alarm
        }),
      }
    default:
      return state
  }
}
