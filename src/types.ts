import { NavigationStackProp } from 'react-navigation-stack'

import { HomeState } from './store/home/reducer'
import { AlarmState } from './store/alarm/reducer'

export type WeekDay = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday'
export type WeekEndDay = 'saturday' | 'sunday'
export type Day = WeekDay | WeekEndDay

// Todo : set clock to better type
export interface IAlarm {
    id: string
    name: string
    clock: any
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
