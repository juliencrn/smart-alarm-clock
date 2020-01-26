import { WeekDay, WeekEndDay } from './types'

const weekday: WeekDay[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
const weekend: WeekEndDay[] = ['saturday', 'sunday']

// eslint-disable-next-line import/prefer-default-export
export const days = {
  weekday, weekend,
}

export function getHumanTime(date: Date): string {
  const time = new Date(date)
  return `${time.getHours()}:${time.getMinutes()}`
}
