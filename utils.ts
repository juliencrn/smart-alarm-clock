import {
  IAlarm, WeekDay, WeekEndDay,
} from './types'

export const alarms: IAlarm[] = [
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
]

const weekday: WeekDay[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
const weekend: WeekEndDay[] = ['saturday', 'sunday']

export const days = {
  weekday, weekend,
}
