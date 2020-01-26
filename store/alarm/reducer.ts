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
      clock: '2020-01-26T04:59:31.534Z',
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      activated: true,
    },
    {
      id: 'abc124',
      name: 'Alarm 2',
      clock: '2020-01-26T04:59:31.534Z',
      days: ['saturday', 'sunday'],
      activated: true,
    },
    {
      id: 'abc125',
      name: '#420',
      clock: '2020-01-26T04:59:31.534Z',
      days: ['friday'],
      activated: false,
    },
    {
      id: 'abc126',
      name: 'Running',
      clock: '2020-01-26T04:59:31.534Z',
      days: ['monday', 'thursday'],
      activated: false,
    },
  ],
}

export default function reducer(state: AlarmState = initialState, action) {
  switch (action.type) {
    case ADD_ALARM:
      return { ...state, alarms: [...state.alarms, action.alarms] }
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
