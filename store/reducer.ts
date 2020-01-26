import { IAlarm } from '../types'
import {
  ADD_ALARM, EDIT_ALARM, DELETE_ALARM, TOGGLE_HOME_EDIT, TOGGLE_ALARM_ACTIVATION,
} from './constants'

export interface State {
    alarms: IAlarm[]
    home: {
        isEditing: boolean
    }
}

const initialState: State = {
  alarms: [
    {
      id: 'abc123',
      name: 'Alarm 1',
      clock: '07:30',
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      activated: true,
    },
    {
      id: 'abc124',
      name: 'Alarm 2',
      clock: '09:00',
      days: ['saturday', 'sunday'],
      activated: true,
    },
    {
      id: 'abc125',
      name: '#420',
      clock: '16:20',
      days: ['friday'],
      activated: false,
    },
    {
      id: 'abc126',
      name: 'Running',
      clock: '08:00',
      days: ['monday', 'thursday'],
      activated: false,
    },
  ],
  home: {
    isEditing: false,
  },
}

export default function reducer(state: State = initialState, action) {
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
    case TOGGLE_HOME_EDIT:
      return { ...state, home: { ...state.home, isEditing: action.value } }
    default:
      return state
  }
}
