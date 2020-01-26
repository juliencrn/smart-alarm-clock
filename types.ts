import { NavigationStackProp } from 'react-navigation-stack'

import { HomeState } from './store/reducers/homeReducer'
import { AlarmState } from './store/reducers/alarmReducer'

export type WeekDay = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday'
export type WeekEndDay = 'saturday' | 'sunday'
export type Day = WeekDay | WeekEndDay

export interface IAlarm {
    id: string
    name: string
    clock: string
    days?: Day[],
    activated: boolean
}

export interface Page {
    navigation: NavigationStackProp
}

export interface State {
    alarm: AlarmState
    home: HomeState
}
